require "test_helper"

class NotificationsControllerTest < ActionDispatch::IntegrationTest
  # Long enough that a console showing only the beginning of it would not show
  # the message in full.
  MESSAGE = "The safety sign at the east entrance was reported damaged during the night shift, " \
            "so please inspect it and fit a replacement before the morning shift starts."

  test "the console shows the message in full" do
    holder = users(:one)
    Notification.raise_for(event: "safety sign", message: MESSAGE, user: holder)

    sign_in_as(holder)
    get notifications_url

    assert_response :success
    assert_select "h1", text: "Notifications"
    assert_select "h2", text: "safety sign"
    assert_select "p", text: MESSAGE
    assert_includes response.body, MESSAGE
    assert_match "console: delivered", response.body
    assert_match "email: delivered", response.body
  end
end
