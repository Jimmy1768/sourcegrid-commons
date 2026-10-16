# frozen_string_literal: true

class NotificationsController < ApplicationController
  def index
    @notifications = Current.user.notifications.includes(:deliveries).order(created_at: :desc)
  end
end
