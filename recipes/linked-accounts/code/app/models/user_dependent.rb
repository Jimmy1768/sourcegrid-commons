# The link between a user and a dependent they care for: the user's role, a
# caretaker unless given another, and what the dependent is to that user.
class UserDependent < ApplicationRecord
  belongs_to :user
  belongs_to :dependent

  validates :role, presence: true
  validates :dependent_id, uniqueness: { scope: :user_id }

  after_destroy :destroy_dependent_left_alone

  private
    # A dependent goes with its last link: no one could reach it after. When
    # the dependent itself is being removed, its links go with it instead.
    def destroy_dependent_left_alone
      return if destroyed_by_association&.active_record == Dependent

      dependent.destroy! unless dependent.user_dependents.exists?
    end
end
