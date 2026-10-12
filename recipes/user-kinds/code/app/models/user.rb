class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy

  # Each user is one kind from this list, a member unless given another: the
  # column's default. Rename the kinds to the person's own.
  enum :kind, { admin: "admin", member: "member" }, validate: true

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
