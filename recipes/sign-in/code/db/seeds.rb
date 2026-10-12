# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# The test login, in development only. README.md lists it for the person.
# Change both before anyone else uses the app.
if Rails.env.development?
  User.find_or_create_by!(email_address: "person@example.com") do |user|
    user.password = "test-login"
  end
end
