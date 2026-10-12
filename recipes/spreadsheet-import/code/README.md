# Web app

A Rails 8 web app on PostgreSQL, server-rendered, that starts with the
person's records, read from their spreadsheet.

## Run it

It needs a PostgreSQL server running on this computer.

    bin/setup   # installs the gems, prepares the database, imports the spreadsheet in db/import/, and starts the app
    bin/dev     # starts it again, at http://localhost:3000

## The person's spreadsheet

Put it at `db/import/contacts.csv` or `db/import/contacts.xlsx` before the
first `bin/setup`, and setup imports it. To import a file again, or a newer
one, at any time:

    bin/rails import:contacts FILE=db/import/contacts.csv

The import prints how many rows were added, updated, skipped and set aside.
Rows set aside are listed with their reasons, and written to a file under
`tmp/imports/` whose path it prints. A file that cannot be read is refused
by its name, and nothing is saved. The original file is never changed.
