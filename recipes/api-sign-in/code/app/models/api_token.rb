class ApiToken < ApplicationRecord
  # One for each sign-in. The token itself is a long random string the client
  # keeps; the server keeps only its SHA-256 digest, so a copy of the database
  # holds no token anyone can use. Signing out deletes the row, which revokes
  # the token.
  belongs_to :user

  validates :token_digest, presence: true, uniqueness: true

  DEFAULT_DEVICE_NAME = "Unknown device"

  def self.digest(token)
    Digest::SHA256.hexdigest(token.to_s)
  end

  # Makes a token for the person and returns the record and the token. This is
  # the only moment the token itself exists on the server: it goes to the
  # client in the sign-in answer and is never stored.
  def self.issue(user:, device_name: nil)
    token = SecureRandom.urlsafe_base64(32)
    record = user.api_tokens.create!(
      token_digest: digest(token),
      device_name: device_name.to_s.strip.first(100).presence || DEFAULT_DEVICE_NAME,
      last_used_at: Time.current
    )
    [ record, token ]
  end

  # The record a token belongs to, or nil for a token that is blank, unknown or
  # revoked. A token that is found has its last_used_at set to now.
  def self.authenticate(token)
    return if token.blank?

    record = find_by(token_digest: digest(token))
    record&.update_column(:last_used_at, Time.current)
    record
  end
end
