require "test_helper"

class CaretakersControllerTest < ActionDispatch::IntegrationTest
  setup do
    sign_in_as users(:one)
  end

  test "adding a caretaker by email links them as a caretaker" do
    dependent = dependents(:ben)

    assert_difference "UserDependent.count" do
      post dependent_caretakers_url(dependent), params: { email_address: " TWO@example.com " }
    end

    assert_redirected_to dependent_url(dependent)
    assert_equal "caretaker", dependent.user_dependents.find_by!(user: users(:two)).role
    follow_redirect!
    assert_select "p", text: "two@example.com now cares for Ben Lee."
  end

  test "a caretaker added by email can be given what the dependent is to them, which their own edit screen shows" do
    dependent = dependents(:ben)

    post dependent_caretakers_url(dependent), params: { email_address: "two@example.com", relationship_label: "neighbour" }

    assert_equal "neighbour", dependent.user_dependents.find_by!(user: users(:two)).relationship_label
    follow_redirect!
    assert_select "#caretakers li", text: "two@example.com (neighbour)"

    sign_out
    sign_in_as users(:two)
    get edit_dependent_url(dependent)
    assert_select "input[name=relationship_label][value=?]", "neighbour"
  end

  test "an unknown address is refused" do
    dependent = dependents(:ben)

    assert_no_difference "UserDependent.count" do
      post dependent_caretakers_url(dependent), params: { email_address: "nobody@example.com" }
    end

    assert_redirected_to dependent_url(dependent)
    follow_redirect!
    assert_select "p", text: "No one who can sign in has that email address."
  end

  test "an address already linked is refused" do
    dependent = dependents(:ana)

    assert_no_difference "UserDependent.count" do
      post dependent_caretakers_url(dependent), params: { email_address: "two@example.com" }
    end

    assert_redirected_to dependent_url(dependent)
    follow_redirect!
    assert_select "p", text: "two@example.com already cares for Ana Ortega."
  end

  test "a caretaker cannot be added to another user's dependent" do
    assert_no_difference "UserDependent.count" do
      post dependent_caretakers_url(dependents(:cat)), params: { email_address: "one@example.com" }
    end

    assert_response :not_found
  end
end
