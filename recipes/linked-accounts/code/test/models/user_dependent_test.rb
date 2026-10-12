require "test_helper"

class UserDependentTest < ActiveSupport::TestCase
  test "a user, a dependent and a role are required" do
    link = UserDependent.new(role: "")

    assert_not link.valid?
    assert_includes link.errors[:user], "must exist"
    assert_includes link.errors[:dependent], "must exist"
    assert_includes link.errors[:role], "can't be blank"
  end

  test "the role is caretaker when not given" do
    assert_equal "caretaker", UserDependent.new.role
  end

  test "a pair is linked once, by the model and by the database" do
    link = UserDependent.new(user: users(:one), dependent: dependents(:ana))

    assert_not link.valid?
    assert_includes link.errors[:dependent_id], "has already been taken"
    assert_raises(ActiveRecord::RecordNotUnique) { link.save!(validate: false) }
  end

  test "leaving keeps a dependent with another caretaker, and removes one left alone" do
    ana, ben = dependents(:ana), dependents(:ben)

    user_dependents(:one_ana).destroy!
    assert Dependent.exists?(ana.id)

    user_dependents(:one_ben).destroy!
    assert_not Dependent.exists?(ben.id)
  end

  test "removing a user removes the dependents only they cared for" do
    ana, ben, cat = dependents(:ana, :ben, :cat)

    users(:one).destroy!

    assert Dependent.exists?(ana.id)
    assert_not Dependent.exists?(ben.id)
    assert Dependent.exists?(cat.id)
  end
end
