class User < ApplicationRecord
  # The signed-in person: an email address and a password, kept by
  # has_secure_password with bcrypt. The password is never stored, only its
  # digest.
  has_secure_password

  # One for each sign-in, each on one device. Signing out deletes the one the
  # call came with; the rest stay.
  has_many :api_tokens, dependent: :destroy

  normalizes :email_address, with: ->(email_address) { email_address.strip.downcase }

  validates :email_address, presence: true, uniqueness: true

  # What the API tells a client about the person. The password digest never
  # leaves the server.
  def as_api_json
    { id: id, email_address: email_address }
  end
end
