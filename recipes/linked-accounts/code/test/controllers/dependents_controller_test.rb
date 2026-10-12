require "test_helper"

class DependentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    sign_in_as users(:one)
  end

  test "signed out, the dependents list sends the person to sign in" do
    sign_out
    get dependents_url
    assert_redirected_to new_session_url
  end

  test "the list shows only the signed-in user's dependents" do
    get dependents_url
    assert_response :success
    assert_select "#dependents li", count: 2
    assert_select "#dependents li a", text: "Ana Ortega"
    assert_select "#dependents li a", text: "Ben Lee"
    assert_select "#dependents li a", text: "Cat Lee", count: 0
  end

  test "should get new" do
    get new_dependent_url
    assert_response :success
  end

  test "adding a dependent makes the user its caretaker, with what the dependent is to them" do
    assert_difference [ "Dependent.count", "UserDependent.count" ] do
      post dependents_url, params: { dependent: { name: "Dan Lee", birthdate: "2015-06-01" }, relationship_label: "grandson" }
    end

    dependent = Dependent.find_by!(name: "Dan Lee")
    assert_redirected_to dependent_url(dependent)
    link = dependent.user_dependents.sole
    assert_equal users(:one), link.user
    assert_equal "caretaker", link.role
    assert_equal "grandson", link.relationship_label
  end

  test "a missing name is refused with a message on the form, and nothing is added" do
    assert_no_difference [ "Dependent.count", "UserDependent.count" ] do
      post dependents_url, params: { dependent: { name: "" } }
    end

    assert_response :unprocessable_content
    assert_select "li", text: "Name can't be blank"
  end

  test "a dependent with two caretakers is listed for both, and its page shows both with what it is to each" do
    get dependent_url(dependents(:ana))
    assert_response :success
    assert_select "#caretakers li", count: 2
    assert_select "#caretakers li", text: "one@example.com (mother)"
    assert_select "#caretakers li", text: "two@example.com (neighbour)"

    sign_out
    sign_in_as users(:two)
    get dependents_url
    assert_select "#dependents li a", text: "Ana Ortega"
  end

  test "the edit screen shows the signed-in caretaker's own label" do
    get edit_dependent_url(dependents(:ana))
    assert_response :success
    assert_select "input[name=relationship_label][value=?]", "mother"
  end

  test "a caretaker changes the details and what the dependent is to them, and only their own label" do
    ana = dependents(:ana)

    patch dependent_url(ana), params: { dependent: { name: "Ana Ortega Ruiz" }, relationship_label: "grandmother" }

    assert_redirected_to dependent_url(ana)
    assert_equal "Ana Ortega Ruiz", ana.reload.name
    assert_equal "grandmother", user_dependents(:one_ana).reload.relationship_label
    assert_equal "neighbour", user_dependents(:two_ana).reload.relationship_label
  end

  test "details and label are saved together or not at all: a missing name changes neither" do
    ana = dependents(:ana)

    patch dependent_url(ana), params: { dependent: { name: "" }, relationship_label: "grandmother" }

    assert_response :unprocessable_content
    assert_equal "Ana Ortega", ana.reload.name
    assert_equal "mother", user_dependents(:one_ana).reload.relationship_label
  end

  test "another user's dependent is not found when viewed, edited, updated or left" do
    cat = dependents(:cat)

    get dependent_url(cat)
    assert_response :not_found
    get edit_dependent_url(cat)
    assert_response :not_found
    patch dependent_url(cat), params: { dependent: { name: "Taken" } }
    assert_response :not_found
    assert_no_difference "UserDependent.count" do
      delete leave_dependent_url(cat)
    end
    assert_response :not_found
    assert_equal "Cat Lee", cat.reload.name
  end

  test "a dependent cannot be removed directly, only by its last caretaker leaving" do
    assert_no_difference "Dependent.count" do
      delete dependent_url(dependents(:ben))
    end
    assert_response :not_found
  end

  test "leaving keeps the dependent for its other caretaker" do
    ana = dependents(:ana)

    assert_no_difference "Dependent.count" do
      delete leave_dependent_url(ana)
    end

    assert_redirected_to dependents_url
    follow_redirect!
    assert_select "p", text: "You no longer care for Ana Ortega."
    assert_equal [ users(:two) ], ana.reload.users
  end

  test "the last caretaker leaving removes the dependent, and the page says so" do
    assert_difference "Dependent.count", -1 do
      delete leave_dependent_url(dependents(:ben))
    end

    follow_redirect!
    assert_select "p", text: "You were Ben Lee's last caretaker, so Ben Lee was removed."
  end
end
