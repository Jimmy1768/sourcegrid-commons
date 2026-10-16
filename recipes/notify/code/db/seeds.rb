# Records the app needs in order to run. Safe to run again: nothing is made
# twice.
#
# The test login, in development only. README.md lists it for the person.
# Change both before anyone else uses the app.
if Rails.env.development?
  user = User.find_or_create_by!(email_address: "person@example.com") do |user|
    user.password = "test-login"
  end

  # One holder with one message to look at. The notification's three deliveries
  # are made in order: console, email, push. No push subscription is created,
  # so the push delivery is recorded as not gone, with a reason beside it.
  if user.notifications.none?
    Notification.raise_for(
      event: "safety sign",
      message: "The safety sign at the east entrance was reported damaged. Please inspect it as soon as possible.",
      user: user
    )
  end
end
