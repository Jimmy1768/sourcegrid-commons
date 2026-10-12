# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# One test login for each kind of user, in development only. README.md lists
# them for the person. Change them before anyone else uses the app.
if Rails.env.development?
  {
    "admin@example.com" => [ "admin", "test-login-admin" ],
    "member@example.com" => [ "member", "test-login-member" ]
  }.each do |email_address, (kind, password)|
    User.find_or_create_by!(email_address: email_address) do |user|
      user.kind = kind
      user.password = password
    end
  end
end
