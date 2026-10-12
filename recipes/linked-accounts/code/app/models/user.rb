class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :user_dependents, dependent: :destroy
  has_many :dependents, through: :user_dependents

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
