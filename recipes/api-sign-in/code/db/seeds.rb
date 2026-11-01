# This file should ensure the existence of records required to run the
# application in every environment (production, development, test). The code
# here should be idempotent so that it can be executed at any point in every
# environment. The data can then be loaded with the bin/rails db:seed command
# (or created alongside the database with db:setup).

# The test login, in development only: a person to sign in as from the phone
# app or with curl. It is listed in the Recipe's README. The person's own app
# changes this email address and password before anyone else uses it. It is
# never made in test or production.
if Rails.env.development?
  user = User.find_or_initialize_by(email_address: "person@example.com")
  user.password = "test-login"
  user.save!
end
