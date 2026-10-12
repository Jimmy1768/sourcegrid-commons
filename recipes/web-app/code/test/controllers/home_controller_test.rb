require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "the home page is served at the root and shows the app's name" do
    get root_url
    assert_response :success
    assert_select "title", "Web app"
    assert_select "h1", "Web app"
  end
end
