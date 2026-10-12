require "test_helper"

class ContactTest < ActiveSupport::TestCase
  test "a name and an email are required" do
    contact = Contact.new

    assert_not contact.valid?
    assert_includes contact.errors[:name], "can't be blank"
    assert_includes contact.errors[:email], "can't be blank"
    assert Contact.new(name: "New Lee", email: "new@example.com").valid?
  end

  test "the email is stripped and lowercased, and unique in the model and the database" do
    assert_equal "new@example.com", Contact.new(email: " NEW@Example.com ").email

    taken = Contact.new(name: "Zoe again", email: " ZOE@example.com ")
    assert_not taken.valid?
    assert_includes taken.errors[:email], "has already been taken"
    assert_raises(ActiveRecord::RecordNotUnique) { taken.save!(validate: false) }
  end
end
