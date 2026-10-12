require "test_helper"

class DependentTest < ActiveSupport::TestCase
  test "a name is required, and a birthdate is not" do
    dependent = Dependent.new(name: "")

    assert_not dependent.valid?
    assert_includes dependent.errors[:name], "can't be blank"
    assert Dependent.new(name: "Dan Lee").valid?
  end

  test "removing a dependent removes its links" do
    assert_difference "UserDependent.count", -2 do
      dependents(:ana).destroy!
    end
  end

  test "a dependent can be followed to its caretakers, and a user to their dependents" do
    assert_equal %w[ one@example.com two@example.com ], dependents(:ana).users.order(:email_address).pluck(:email_address)
    assert_equal [ "Ana Ortega", "Ben Lee" ], users(:one).dependents.order(:name).pluck(:name)
  end
end
