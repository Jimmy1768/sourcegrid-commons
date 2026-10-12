require "test_helper"
require "rake"

class ImportTaskTest < ActiveSupport::TestCase
  setup do
    Rails.application.load_tasks unless Rake::Task.task_defined?("import:contacts")
    Rake::Task["import:contacts"].reenable
  end

  teardown do
    ENV.delete("FILE")
  end

  test "bin/rails import:contacts imports the file named by FILE and prints the report" do
    ENV["FILE"] = file_fixture("contacts.csv").to_s

    output = nil
    assert_difference("Contact.count", 3) do
      output, = capture_io { Rake::Task["import:contacts"].invoke }
    end
    assert_includes output, "Imported contacts.csv: 3 added, 0 updated, 0 skipped, 0 set aside."
  end

  test "a file the import refuses ends the command with its message alone, and nothing is saved" do
    ENV["FILE"] = file_fixture("contacts_malformed.csv").to_s

    errors = nil
    assert_no_difference("Contact.count") do
      _, errors = capture_io { assert_raises(SystemExit) { Rake::Task["import:contacts"].invoke } }
    end
    assert_match(/\Acontacts_malformed\.csv cannot be read as CSV \(.+\); nothing was imported\.\n\z/, errors)
  end
end
