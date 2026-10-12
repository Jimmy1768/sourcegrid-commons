# The example record a spreadsheet's rows fill: rename it, and its columns, to
# the person's own.
class Contact < ApplicationRecord
  normalizes :email, with: ->(email) { email.strip.downcase }

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
