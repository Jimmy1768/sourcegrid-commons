require "test_helper"

class PasswordResetTest < ActionDispatch::IntegrationTest
  test "a reset sends one email whose link sets a new password, which then signs in" do
    user = users(:one)

    assert_emails 1 do
      post passwords_url, params: { email_address: user.email_address }
    end
    assert_redirected_to new_session_url

    mail = ActionMailer::Base.deliveries.last
    assert_equal [ user.email_address ], mail.to
    link = mail.text_part.body.to_s[%r{http://\S+/passwords/[^/\s]+/edit}]
    assert link, "the email carries the reset link"

    get link
    assert_response :success

    token = link[%r{/passwords/([^/]+)/edit}, 1]
    put password_url(token), params: { password: "a-new-password", password_confirmation: "a-new-password" }
    assert_redirected_to new_session_url

    post session_url, params: { email_address: user.email_address, password: "password" }
    assert_redirected_to new_session_url, "the old password no longer signs in"

    post session_url, params: { email_address: user.email_address, password: "a-new-password" }
    assert_redirected_to root_url
    get root_url
    assert_response :success
  end
end
