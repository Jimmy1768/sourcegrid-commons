# frozen_string_literal: true

class NotificationMailer < ApplicationMailer
  def notification(notification)
    @notification = notification
    mail to: notification.user.email_address, subject: notification.event
  end
end
