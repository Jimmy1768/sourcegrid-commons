require "csv"

# Reads the person's spreadsheet, a .csv or an .xlsx file, into records, one
# row each. The original file is only read. A row that fails is set aside with
# its row number and reasons, and the rest are still imported. A row whose key
# matches a saved record updates it, so the same file run again adds nothing.
class ContactImport
  # The settings, set from the person's file.
  #
  # The record each row fills.
  RECORD = Contact
  # Each column, as its header reads lowercased with spaces trimmed, and the
  # field it fills. Any other column is ignored and named in the report.
  COLUMNS = { "name" => :name, "email" => :email, "joined on" => :joined_on }.freeze
  # The columns a file must have, or nothing is imported.
  REQUIRED_COLUMNS = [ "name", "email" ].freeze
  # The field that finds a record already saved, so a second run updates it.
  KEY = :email
  # The formats a date column accepts, as Date.strptime reads them. A date
  # cell in an .xlsx file needs none: it comes as a date.
  DATE_FORMATS = [ "%Y-%m-%d" ].freeze

  # Where the rows set aside are written, one file for each import.
  SET_ASIDE_FOLDER = Rails.root.join("tmp/imports")

  # A file that cannot be imported at all; nothing has been saved.
  class Refused < StandardError; end

  Report = Struct.new(:file, :added, :updated, :skipped, :set_aside, :ignored_columns, :set_aside_path, keyword_init: true) do
    def summary
      lines = [ "Imported #{file}: #{added} added, #{updated} updated, #{skipped} skipped, #{set_aside.size} set aside." ]
      set_aside.each { |row| lines << "  Row #{row[:number]} set aside: #{row[:reasons].join("; ")}" }
      lines << "Columns ignored: #{ignored_columns.join(", ")}" if ignored_columns.any?
      lines << "Rows set aside, with their reasons: #{set_aside_path}" if set_aside_path
      lines.join("\n")
    end
  end

  # Imports contacts.csv, or else contacts.xlsx, from the folder when one is
  # there, as the seeds do from db/import/ at first setup. Returns the report,
  # or nil when there is no file.
  def self.from_folder(folder)
    file = [ "contacts.csv", "contacts.xlsx" ].map { |name| Pathname(folder).join(name) }.find(&:file?)
    new(file).run if file
  end

  def initialize(path)
    @path = Pathname(path)
  end

  def run
    headers, *rows = read_rows
    refuse "has no header row" if headers.nil?

    names = headers.map { |header| normalize_header(header) }
    missing = REQUIRED_COLUMNS - names
    refuse "has no #{missing.join(", ")} column" if missing.any?

    fields = names.map { |name| COLUMNS[name] }
    ignored = headers.each_index.select { |i| fields[i].nil? && !names[i].empty? }.map { |i| headers[i].to_s.strip }
    report = Report.new(file: @path.basename.to_s, added: 0, updated: 0, skipped: 0, set_aside: [], ignored_columns: ignored)
    rows.each.with_index(2) { |values, number| import_row(values, number, fields, report) }
    report.set_aside_path = write_set_aside(headers, report.set_aside) if report.set_aside.any?
    report
  end

  private
    def refuse(reason)
      raise Refused, "#{@path.basename} #{reason}; nothing was imported."
    end

    def read_rows
      case @path.extname.downcase
      when ".csv" then csv_rows
      when ".xlsx" then xlsx_rows
      else refuse "is not a .csv or .xlsx file"
      end
    end

    def csv_rows
      CSV.parse(csv_text)
    rescue CSV::MalformedCSVError => error
      refuse "cannot be read as CSV (#{error.message.delete_suffix(".")})"
    end

    # UTF-8, with or without a byte-order mark, or else Windows-1252.
    def csv_text
      text = @path.binread.delete_prefix("\xEF\xBB\xBF".b).force_encoding(Encoding::UTF_8)
      return text if text.valid_encoding?

      text.force_encoding(Encoding::Windows_1252).encode(Encoding::UTF_8)
    rescue EncodingError
      refuse "is neither UTF-8 nor Windows-1252 text"
    end

    # The first sheet; its date cells come as dates. A file that is not a
    # workbook, whether not a zip at all or a zip without a workbook inside,
    # is refused.
    def xlsx_rows
      sheet = Roo::Excelx.new(@path.to_s).sheet(0)
      sheet.first_row ? (sheet.first_row..sheet.last_row).map { |number| sheet.row(number) } : []
    rescue Zip::Error, Roo::Error, ArgumentError
      refuse "cannot be read as an Excel workbook"
    end

    def normalize_header(header)
      header.to_s.strip.downcase
    end

    # One row into one record. A spec whose rows fill two records and the link
    # between them, or name another record by its key, does that here.
    def import_row(values, number, fields, report)
      if values.all? { |value| value.to_s.strip.empty? }
        report.skipped += 1
        return
      end

      reasons = []
      attributes = {}
      fields.each_with_index do |field, i|
        attributes[field] = cast(field, values[i], reasons) if field
      end

      record = RECORD.find_or_initialize_by(KEY => attributes[KEY])
      record.assign_attributes(attributes)
      reasons.concat(record.errors.full_messages) unless record.valid?

      if reasons.any?
        report.set_aside << { number: number, values: values, reasons: reasons }
      elsif record.new_record?
        record.save!
        report.added += 1
      else
        record.save!
        report.updated += 1
      end
    end

    def cast(field, value, reasons)
      return value.to_s.strip.presence unless RECORD.type_for_attribute(field.to_s).type == :date
      return value.to_date if value.is_a?(Date)

      text = value.to_s.strip
      return nil if text.empty?

      DATE_FORMATS.each do |format|
        return Date.strptime(text, format)
      rescue Date::Error
        next
      end
      examples = DATE_FORMATS.map { |format| Date.new(2024, 1, 31).strftime(format) }
      reasons << "#{RECORD.human_attribute_name(field)} \"#{text}\" is not a date like #{examples.join(" or ")}"
      nil
    end

    def write_set_aside(headers, rows)
      FileUtils.mkdir_p(SET_ASIDE_FOLDER)
      path = SET_ASIDE_FOLDER.join("#{@path.basename(".*")}-set-aside-#{Time.current.strftime("%Y%m%d-%H%M%S-%L")}.csv")
      CSV.open(path, "w") do |csv|
        csv << [ "row", *headers, "reasons" ]
        rows.each { |row| csv << [ row[:number], *row[:values], row[:reasons].join("; ") ] }
      end
      path
    end
end
