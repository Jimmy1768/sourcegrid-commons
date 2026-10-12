# A person who does not sign in, acted for by the users linked to them: their
# caretakers.
class Dependent < ApplicationRecord
  has_many :user_dependents, dependent: :destroy
  has_many :users, through: :user_dependents

  validates :name, presence: true
end
