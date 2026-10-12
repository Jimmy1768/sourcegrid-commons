# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# Two test logins who care for one dependent, in development only. README.md
# lists them for the person. Change them before anyone else uses the app.
if Rails.env.development?
  person = User.find_or_create_by!(email_address: "person@example.com") do |user|
    user.password = "test-login"
  end
  carer = User.find_or_create_by!(email_address: "carer@example.com") do |user|
    user.password = "test-login-carer"
  end

  unless person.dependents.exists?(name: "Rosa Ortega")
    rosa = Dependent.create!(name: "Rosa Ortega", birthdate: Date.new(1948, 3, 2))
    rosa.user_dependents.create!(user: person, relationship_label: "mother")
    rosa.user_dependents.create!(user: carer, relationship_label: "neighbour")
  end
end
