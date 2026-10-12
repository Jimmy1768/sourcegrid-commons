require "test_helper"

class KindsAndDependentsTest < ActionDispatch::IntegrationTest
  test "an admin's nav has People and Dependents" do
    sign_in_as users(:admin)
    get root_url
    assert_response :success
    assert_select "nav a[href=?]", people_path, text: "People"
    assert_select "nav a[href=?]", dependents_path, text: "Dependents"
  end

  test "a member's nav has Dependents and not People" do
    sign_in_as users(:one)
    get root_url
    assert_response :success
    assert_select "nav a[href=?]", dependents_path, text: "Dependents"
    assert_select "nav a[href=?]", people_path, count: 0
  end

  test "each kind reaches only their own dependents, and only an admin opens People" do
    sign_in_as users(:one)
    get dependents_url
    assert_response :success
    assert_select "#dependents a", text: "Ana Ortega"
    assert_select "#dependents a", text: "Ben Lee"
    get people_url
    assert_redirected_to root_url

    sign_out
    sign_in_as users(:admin)
    get people_url
    assert_response :success
    get dependent_url(dependents(:ana))
    assert_response :not_found
  end

  test "the seeds make a login for each kind and a second member, who share one dependent, and make nothing twice" do
    load_seed_as_development
    counts = [ User.count, Dependent.count, UserDependent.count ]
    load_seed_as_development
    assert_equal counts, [ User.count, Dependent.count, UserDependent.count ]

    kinds = User.where(email_address: %w[ admin@example.com member@example.com carer@example.com ]).pluck(:email_address, :kind).to_h
    assert_equal({ "admin@example.com" => "admin", "member@example.com" => "member", "carer@example.com" => "member" }, kinds)

    rosa = Dependent.find_by!(name: "Rosa Ortega")
    labels = rosa.user_dependents.includes(:user).to_h { |link| [ link.user.email_address, link.relationship_label ] }
    assert_equal({ "member@example.com" => "mother", "carer@example.com" => "neighbour" }, labels)
  end

  test "removing a user of either kind removes the dependents only they cared for" do
    assert_difference [ "User.count", "Dependent.count" ], -1 do
      users(:one).destroy
    end
    assert Dependent.exists?(name: "Ana Ortega")
    assert_not Dependent.exists?(name: "Ben Lee")

    admin = users(:admin)
    Dependent.create!(name: "Dan Lee").user_dependents.create!(user: admin)
    assert_difference [ "User.count", "Dependent.count" ], -1 do
      admin.destroy
    end
    assert_not Dependent.exists?(name: "Dan Lee")
  end

  private
    # The seeds run in development only, so load them as development would.
    def load_seed_as_development
      test_env = Rails.env
      Rails.env = "development"
      Rails.application.load_seed
    ensure
      Rails.env = test_env
    end
end
