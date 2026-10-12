namespace :import do
  desc "Import contacts from a .csv or .xlsx file: bin/rails import:contacts FILE=path/to/contacts.csv"
  task contacts: :environment do
    file = ENV["FILE"].presence or abort "Name the file: bin/rails import:contacts FILE=path/to/contacts.csv"
    abort "No file at #{file}" unless File.file?(file)

    puts ContactImport.new(file).run.summary
  rescue ContactImport::Refused => error
    abort error.message
  end
end
