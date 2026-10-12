require "test_helper"

class ContactImportTest < ActiveSupport::TestCase
  # Each import with rows set aside writes a file under tmp/imports/; the
  # tests remove the ones they made.
  setup { @set_aside_files = set_aside_files }
  teardown { FileUtils.rm_f(set_aside_files - @set_aside_files) }

  test "a CSV imports each row, and the report counts them" do
    report = nil
    assert_difference "Contact.count", 3 do
      report = ContactImport.new(file_fixture("contacts.csv")).run
    end

    assert_equal [ 3, 0, 0, 0 ], [ report.added, report.updated, report.skipped, report.set_aside.size ]
    assert_includes report.summary, "Imported contacts.csv: 3 added, 0 updated, 0 skipped, 0 set aside."
    assert_equal Date.new(2024, 1, 15), Contact.find_by!(email: "ana@example.com").joined_on
    assert_nil Contact.find_by!(email: "ben@example.com").joined_on
  end

  test "headers match regardless of case and spaces, and an unknown column is ignored and named" do
    report = ContactImport.new(file_fixture("contacts.csv")).run

    assert_equal "Cat Lee", Contact.find_by!(email: "cat@example.com").name
    assert_equal [ "Phone" ], report.ignored_columns
    assert_includes report.summary, "Columns ignored: Phone"
  end

  test "a CSV with a byte-order mark imports with its accents intact" do
    ContactImport.new(file_fixture("contacts_bom.csv")).run

    assert_equal "José Núñez", Contact.find_by!(email: "jose@example.com").name
  end

  test "a Windows-1252 CSV imports with its accents intact" do
    ContactImport.new(file_fixture("contacts_windows_1252.csv")).run

    assert_equal "Françoise Lefèvre", Contact.find_by!(email: "francoise@example.com").name
  end

  test "an .xlsx file's first sheet imports, its date cells as dates, and no other sheet is read" do
    report = ContactImport.new(file_fixture("contacts.xlsx")).run

    assert_equal 2, report.added
    assert_equal Date.new(2024, 5, 6), Contact.find_by!(email: "gil@example.com").joined_on
    assert Contact.exists?(email: "hana@example.com")
    assert_not Contact.exists?(email: "notes@example.com")
  end

  test "a missing required column stops the import before anything is saved, saying which" do
    error = assert_no_difference("Contact.count") do
      assert_raises(ContactImport::Refused) { ContactImport.new(file_fixture("contacts_missing_name.csv")).run }
    end

    assert_equal "contacts_missing_name.csv has no name column; nothing was imported.", error.message
  end

  test "a row missing a required detail, and a row with a date in no accepted format, are set aside with their row number and reason, while the rest are imported" do
    report = nil
    assert_difference "Contact.count", 2 do
      report = ContactImport.new(file_fixture("contacts_with_problems.csv")).run
    end

    assert_equal [ 2, 1, 1 ], [ report.added, report.updated, report.skipped ]
    assert_equal [ 3, 5 ], report.set_aside.map { |row| row[:number] }
    assert_equal [ "Name can't be blank" ], report.set_aside.first[:reasons]
    assert_equal [ "Joined on \"15/01/2024\" is not a date like 2024-01-31" ], report.set_aside.second[:reasons]
    assert_includes report.summary, "  Row 3 set aside: Name can't be blank"
    assert_includes report.summary, "  Row 5 set aside: Joined on \"15/01/2024\" is not a date like 2024-01-31"
    assert_equal [ "ana@example.com", "eve@example.com" ], Contact.where.not(id: contacts(:zoe)).order(:email).pluck(:email)
  end

  test "a repeated key in the same file updates the record its first row added" do
    ContactImport.new(file_fixture("contacts_with_problems.csv")).run

    assert_equal "Ana Maria Ortega", Contact.find_by!(email: "ana@example.com").name
  end

  test "the rows set aside are written with their reasons to a file under tmp/imports/, whose path the report prints" do
    report = ContactImport.new(file_fixture("contacts_with_problems.csv")).run
    rows = CSV.read(report.set_aside_path)

    assert report.set_aside_path.to_s.start_with?(ContactImport::SET_ASIDE_FOLDER.to_s)
    assert_equal [ "row", "name", "email", "joined on", "reasons" ], rows.first
    assert_equal [ "3", nil, "noname@example.com", "2024-01-16", "Name can't be blank" ], rows.second
    assert_equal [ "5", "Dan Lee", "dan@example.com", "15/01/2024", "Joined on \"15/01/2024\" is not a date like 2024-01-31" ], rows.third
    assert_includes report.summary, "Rows set aside, with their reasons: #{report.set_aside_path}"
  end

  test "a blank row is skipped, not set aside" do
    report = ContactImport.new(file_fixture("contacts_with_problems.csv")).run

    assert_equal 1, report.skipped
    assert_not_includes report.set_aside.map { |row| row[:number] }, 4
  end

  test "running the same file again adds no duplicates, and a changed detail is updated" do
    ContactImport.new(file_fixture("contacts.csv")).run

    report = nil
    assert_no_difference("Contact.count") { report = ContactImport.new(file_fixture("contacts.csv")).run }
    assert_equal [ 0, 3 ], [ report.added, report.updated ]

    Dir.mktmpdir do |folder|
      changed = File.join(folder, "contacts.csv")
      File.write(changed, file_fixture("contacts.csv").read.sub("Ben Lee", "Benjamin Lee"))
      assert_no_difference("Contact.count") { ContactImport.new(changed).run }
    end
    assert_equal "Benjamin Lee", Contact.find_by!(email: "ben@example.com").name
  end

  test "the original file is unchanged after an import" do
    files = %w[ contacts.csv contacts_with_problems.csv contacts.xlsx ].map { |name| file_fixture(name) }
    before = files.map { |file| Digest::SHA256.file(file).hexdigest }

    files.each { |file| ContactImport.new(file).run }

    assert_equal before, files.map { |file| Digest::SHA256.file(file).hexdigest }
  end

  test "a CSV that cannot be read, such as one with an unclosed quote, is refused by its name, and nothing is saved" do
    error = assert_no_difference("Contact.count") do
      assert_raises(ContactImport::Refused) { ContactImport.new(file_fixture("contacts_malformed.csv")).run }
    end

    assert_match(/\Acontacts_malformed\.csv cannot be read as CSV \(.+\); nothing was imported\.\z/, error.message)
  end

  test "an .xlsx that is not a workbook is refused by its name, and nothing is saved" do
    error = assert_no_difference("Contact.count") do
      assert_raises(ContactImport::Refused) { ContactImport.new(file_fixture("contacts_not_a_workbook.xlsx")).run }
    end

    assert_equal "contacts_not_a_workbook.xlsx cannot be read as an Excel workbook; nothing was imported.", error.message
  end

  test "an .xlsx that is a zip without a workbook inside, such as a renamed document, is refused by its name" do
    Dir.mktmpdir do |folder|
      file = File.join(folder, "contacts.xlsx")
      Zip::File.open(file, create: true) { |zip| zip.get_output_stream("word/document.xml") { |out| out.write("<document/>") } }

      error = assert_no_difference("Contact.count") do
        assert_raises(ContactImport::Refused) { ContactImport.new(file).run }
      end
      assert_equal "contacts.xlsx cannot be read as an Excel workbook; nothing was imported.", error.message
    end
  end

  test "a file that is neither CSV nor .xlsx is refused by its name, and nothing is saved" do
    Dir.mktmpdir do |folder|
      file = File.join(folder, "contacts.txt")
      File.write(file, file_fixture("contacts.csv").read)

      error = assert_no_difference("Contact.count") do
        assert_raises(ContactImport::Refused) { ContactImport.new(file).run }
      end
      assert_equal "contacts.txt is not a .csv or .xlsx file; nothing was imported.", error.message
    end
  end

  test "importing from a folder takes its contacts file, as the seeds do from db/import/" do
    Dir.mktmpdir do |folder|
      FileUtils.cp(file_fixture("contacts.xlsx"), File.join(folder, "contacts.xlsx"))

      assert_difference("Contact.count", 2) { ContactImport.from_folder(folder) }
    end
  end

  test "importing from a folder with no contacts file does nothing" do
    Dir.mktmpdir do |folder|
      assert_no_difference("Contact.count") { assert_nil ContactImport.from_folder(folder) }
    end
  end

  private
    def set_aside_files
      Dir[ContactImport::SET_ASIDE_FOLDER.join("*-set-aside-*.csv")]
    end
end
