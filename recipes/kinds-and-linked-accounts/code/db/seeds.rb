# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# One test login for each kind of user, and a second member; the two members
# care for one dependent between them. In development only. README.md lists
# them for the person. Change them before anyone else uses the app.
if Rails.env.development?
  logins = {
    "admin@example.com" => [ "admin", "test-login-admin" ],
    "member@example.com" => [ "member", "test-login-member" ],
    "carer@example.com" => [ "member", "test-login-carer" ]
  }.to_h do |email_address, (kind, password)|
    user = User.find_or_create_by!(email_address: email_address) do |new_user|
      new_user.kind = kind
      new_user.password = password
    end
    [ email_address, user ]
  end

  member, carer = logins.values_at("member@example.com", "carer@example.com")
  unless member.dependents.exists?(name: "Rosa Ortega")
    rosa = Dependent.create!(name: "Rosa Ortega", birthdate: Date.new(1948, 3, 2))
    rosa.user_dependents.create!(user: member, relationship_label: "mother")
    rosa.user_dependents.create!(user: carer, relationship_label: "neighbour")
  end
end
