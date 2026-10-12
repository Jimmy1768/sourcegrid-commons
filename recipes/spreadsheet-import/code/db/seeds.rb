# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# In development, imports the person's contacts from db/import/contacts.csv or
# db/import/contacts.xlsx when one is there, so the first setup starts the app
# with their data. A file that cannot be imported is named, and setup goes on.
# Import a file again at any time with bin/rails import:contacts FILE=...
if Rails.env.development?
  begin
    report = ContactImport.from_folder(Rails.root.join("db/import"))
    puts report.summary if report
  rescue ContactImport::Refused => error
    warn error.message
  end
end
