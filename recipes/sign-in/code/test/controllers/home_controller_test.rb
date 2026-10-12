require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "signed out, the home page sends the person to sign in" do
    get root_url
    assert_redirected_to new_session_url
  end

  test "signed in, the home page is served and the nav shows the email address and a sign-out button" do
    sign_in_as users(:one)
    get root_url
    assert_response :success
    assert_select "title", "Web app"
    assert_select "h1", "Web app"
    assert_select "nav span", "one@example.com"
    assert_select "nav form[action=?] button", session_path, text: "Sign out"
  end

  test "signing out works: after Sign out, the home page sends the person to sign in again" do
    post session_url, params: { email_address: "one@example.com", password: "password" }
    get root_url
    assert_response :success

    delete session_url
    assert_redirected_to new_session_url

    get root_url
    assert_redirected_to new_session_url
  end
end
