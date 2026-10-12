require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "downcases and strips email_address" do
    user = User.new(email_address: " DOWNCASED@EXAMPLE.COM ")
    assert_equal("downcased@example.com", user.email_address)
  end

  test "a kind is required" do
    user = users(:one)
    user.kind = nil

    assert_not user.valid?
    assert_includes user.errors[:kind], "is not included in the list"
  end

  test "a kind is one of the list" do
    user = users(:one)
    user.kind = "owner"

    assert_not user.valid?
    assert_includes user.errors[:kind], "is not included in the list"
    assert_equal %w[ admin member ], User.kinds.keys
  end

  test "a new user is a member when no kind is given" do
    assert_equal "member", User.new.kind
  end
end
