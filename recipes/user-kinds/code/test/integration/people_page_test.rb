require "test_helper"

class PeoplePageTest < ActionDispatch::IntegrationTest
  test "signed out, the people page sends the person to sign in" do
    get people_url
    assert_redirected_to new_session_url
  end

  test "an admin opens the people page, sees everyone who can sign in with their kind, and has its link" do
    sign_in_as users(:admin)
    get people_url
    assert_response :success
    assert_select "li", count: User.count
    User.find_each { |user| assert_select "li", text: "#{user.email_address}, #{user.kind}" }
    assert_select "nav a[href=?]", people_path, text: "People"
  end

  test "a member is turned away from the people page with a message" do
    sign_in_as users(:one)
    get people_url
    assert_redirected_to root_url
    follow_redirect!
    assert_select "[role=alert]", text: "You may not open that page."
  end

  test "a member is not shown the people link" do
    sign_in_as users(:one)
    get root_url
    assert_response :success
    assert_select "nav a[href=?]", people_path, count: 0
  end

  test "allow_kinds refuses a kind the app does not have" do
    error = assert_raises(ArgumentError) { Class.new(ApplicationController) { allow_kinds :owner } }
    assert_match "owner is not a kind of user", error.message
  end
end
