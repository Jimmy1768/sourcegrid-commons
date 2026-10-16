# frozen_string_literal: true

class Notification < ApplicationRecord
  belongs_to :user

  has_many :deliveries, -> { order(:id) }, dependent: :destroy, inverse_of: :notification

  CHANNELS = %w[console email push].freeze

  validates :event, presence: true
  validates :message, presence: true

  class << self
    # The one way to raise a notification for an event: makes the notification
    # and its three deliveries, in order, console then email then push, and
    # performs each in turn. A channel that fails does not stop the one after
    # it.
    def raise_for(event:, message:, user:)
      transaction do
        notification = create!(event: event, message: message, user: user)
        CHANNELS.each do |channel|
          notification.deliveries.create!(channel: channel, status: "pending").perform
        end
        notification
      end
    end
  end
end