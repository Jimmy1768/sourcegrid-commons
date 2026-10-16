# frozen_string_literal: true

class Delivery < ApplicationRecord
  belongs_to :notification
  has_one :user, through: :notification

  CHANNELS = %w[console email push].freeze
  STATUSES = %w[delivered failed skipped].freeze

  validates :channel, inclusion: { in: CHANNELS }
  validates :status, inclusion: { in: STATUSES + ["pending"] }, allow_nil: true

  # Performs this delivery's own channel. A channel that fails does not stop
  # the one after it: the failure is recorded on this delivery, and the
  # notification's other deliveries still go.
  def perform
    case channel
    when "console"
      update!(status: "delivered")
    when "email"
      NotificationMailer.notification(notification).deliver_now
      update!(status: "delivered")
    when "push"
      if notification.user.push_subscription.present?
        PushService.new.deliver(notification.user.push_subscription, notification.message)
        update!(status: "delivered")
      else
        update!(status: "skipped", failure_reason: "no push subscription")
      end
    end
  rescue StandardError => e
    update!(status: "failed", failure_reason: e.message)
  end
end