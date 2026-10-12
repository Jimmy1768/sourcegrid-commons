The person's records read from their CSV or Excel file, by one command or at first setup, with a report.

# Spreadsheet import

## What it is

The person's records, read from the spreadsheet they keep today into the
web app, so the app starts with their data. It is laid on the web-app base
alone: the import is a command and the setup's seeds, not a page, so it
needs no sign-in. One example record, `Contact`, stands for the person's
own.

- It reads a `.csv` file in UTF-8, in UTF-8 with a byte-order mark as Excel
  writes it, or, when the text is not valid UTF-8, in Windows-1252; and an
  `.xlsx` file's first sheet, its date cells as dates. Any other sheet is
  not read.
- It refuses a file it cannot import, by the file's name and with nothing
  saved, never with a Ruby trace: a file that is neither `.csv` nor
  `.xlsx`; a CSV that cannot be read, such as one with an unclosed quote;
  an `.xlsx` that is not a workbook, whether not a zip at all or a zip
  without a workbook inside, such as a renamed document; and a file
  missing a required column, naming which.
- It matches the first row's headers to fields regardless of case and of
  spaces around them. A column it does not know is ignored and named in the
  report.
- It skips a blank row. It saves each other row through the model, so the
  model's validations decide. A row that fails, a required detail missing,
  a value not valid, or a date in no accepted format, is set aside with its
  row number, counting the header row as 1, and its reasons, while the rest
  are imported.
- A row whose key matches a saved record updates it, so the same file run
  again adds no duplicates, and a changed detail is updated. A key repeated
  within one file updates the record its first row added.
- It only reads the original file, never changes it.
- It prints a report: how many rows were added, updated, skipped and set
  aside, each set-aside row with its number and reasons, and the columns
  ignored. It writes the set-aside rows with their reasons to a CSV under
  `tmp/imports/`, and prints that file's path.
- The command is `bin/rails import:contacts FILE=<path>`. At first setup,
  in development, the seeds import `db/import/contacts.csv`, or else
  `db/import/contacts.xlsx`, when one is there, so the base's one setup
  command starts the app with the person's data. A file the seeds cannot
  import is named, and setup goes on.

Left out: importing from a page, which is a spec's ask for file uploads;
other kinds of file; more than one kind of record from one file, which the
spec adds as *Generic names* says.

## The files

Added:

- `app/models/contact.rb`, the example record, made with Rails' model
  generator, with no screens: a name, required; an email, required and
  unique in the model and the database, stripped and lowercased; and
  `joined_on`, an optional date.
- `app/models/contact_import.rb`, the importer: one plain Ruby class with
  its settings at its top, `RECORD`, `COLUMNS`, `REQUIRED_COLUMNS`, `KEY`
  and `DATE_FORMATS`, and the report.
- `lib/tasks/import.rake`: `bin/rails import:contacts FILE=<path>`. It
  prints the report, or ends with the refusal's message alone.
- `db/import/.keep`: the folder the person's file goes in.
- `db/migrate/20261012134412_create_contacts.rb`, with the unique index on
  the email. Its stamp is this Recipe's generation; the person's app gets
  its own.
- `test/fixtures/contacts.yml`: one contact already saved, which no import
  touches.
- `test/fixtures/files/`, the spreadsheets the tests read:
  - `contacts.csv`: three good rows, with mixed-case headers, spaces around
    them, and an unknown `Phone` column;
  - `contacts_bom.csv`, with a byte-order mark, and
    `contacts_windows_1252.csv`, in Windows-1252 with CRLF line ends, each
    with an accented name;
  - `contacts_with_problems.csv`: a blank row, a row missing its name, a
    date in no accepted format, and a repeated email;
  - `contacts_missing_name.csv`: no `name` column;
  - `contacts_malformed.csv`: an unclosed quote;
  - `contacts_not_a_workbook.xlsx`: text named as a workbook;
  - `contacts.xlsx`: two rows with a date cell, and a second sheet that is
    not read.
- `test/models/contact_test.rb`, `test/models/contact_import_test.rb`,
  `test/tasks/import_task_test.rb`.

Changed, whole, each described under *What to wire*: `Gemfile`,
`Gemfile.lock`, `db/seeds.rb`, `README.md`.

Not carried: `db/schema.rb`, which `bin/setup` writes from the migrations.

The libraries it adds, and their licences: `roo` 3.0.0, MIT, which reads
Excel files with `rubyzip`, BSD-2-Clause, and `nokogiri`, MIT, both already
in the base's lock; and `csv` 3.3.5, Ruby's licence or BSD-2-Clause, Ruby's
own CSV library, a gem of its own since Ruby 3.4.

## Generic names

- `Contact` and its three columns, `name`, `email` and `joined_on`: the
  person's record, made as the spec's things-tracked say, in the model, its
  migration, the importer's `RECORD` and `COLUMNS`, the fixtures and the
  tests.
- The importer's five settings, set from the person's file: `RECORD`, the
  record each row fills; `COLUMNS`, each header as it reads lowercased and
  trimmed, and the field it fills; `REQUIRED_COLUMNS`; `KEY`, the field
  that finds a saved record, so a second run updates rather than adds; and
  `DATE_FORMATS`, as `Date.strptime` reads them.
- One importer and one command for each kind of record the file holds:
  `ContactImport` and `import:contacts`, named for the person's record.
- `db/import/contacts.csv` and `contacts.xlsx`: the file names the seeds
  look for, named for the person's record.
- Two cases a spec may bring, each in `import_row`:
  - a row that fills two records and the link between them, such as a
    parent and a pupil on one line: each record is found by its own key,
    made or updated, and then linked, and the row is set aside with every
    reason when any of the three fails;
  - a column that names another record, such as a class by its code: that
    record is found by its key, and the row is set aside, saying which,
    when none matches.
- The fixture contact `zoe@example.com` and the spreadsheets under
  `test/fixtures/files/`: the tests' own, not the person's.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `Gemfile`: `gem "csv"` and `gem "roo"`, after the Solid gems.
- `Gemfile.lock`: `csv` 3.3.5 and `roo` 3.0.0, each with its checksum;
  `roo`'s other needs are already locked.
- `db/seeds.rb`: in development, the import from `db/import/`, printing the
  report, or naming a file it refuses.
- `README.md`: the app's own README, on PostgreSQL, saying it needs a
  PostgreSQL server running, where the person's file goes, and how to
  import it again.

## The tests

- `test/models/contact_test.rb`: a name and an email are required; the
  email is stripped and lowercased, and unique in the model and the
  database.
- `test/models/contact_import_test.rb`: a CSV imports and the report
  counts; headers match regardless of case and spaces, and an unknown
  column is named; a byte-order mark and Windows-1252 keep their accents;
  an `.xlsx` file's first sheet imports with its date cell, and its second
  sheet is not read; a missing required column refuses the file, saying
  which; a row missing its name and a row with a date in no accepted format
  are set aside with their row numbers and reasons while the rest import; a
  repeated key updates; the set-aside file lists them under `tmp/imports/`;
  a blank row is skipped; a second run adds nothing and updates a changed
  detail; the original files are unchanged; a CSV with an unclosed quote,
  an `.xlsx` that is not a workbook, a zip without a workbook inside, and a
  file of another kind are each refused by name with nothing saved; the
  seeds' import from a folder, with a file and without one.
- `test/tasks/import_task_test.rb`: the command imports the file it is
  given and prints the report; a file it refuses ends it with the message
  alone and nothing saved.

## Checks it meets

For the aide writing the spec and the builder building it: what the build
must prove for each check of the New software Map, and how this Recipe's
tests model it.

- `new-software/web-app/starting-data`,
  "The person's records are imported, or realistic sample data is loaded":
  the person's own file is imported, at first setup or by the command, with
  a report the person can read and nothing silently lost. `ContactImportTest`
  models it with each kind of file and each kind of problem, and
  `ImportTaskTest` with the command.
- `new-software/web-app/things-tracked`,
  "Required details are enforced":
  a row missing a required detail, or with a value its record refuses, is
  set aside with its reason and never saved. `ContactTest` models the
  record's own rules, and `ContactImportTest` the row set aside for them.
- `new-software/web-app/how-to-run`,
  "One command starts it with its data":
  with the person's file in `db/import/` and the PostgreSQL server running,
  `bin/setup` prepares the database, imports the file and starts the app.
  `ContactImportTest`'s import from a folder models the seeds' part.
