# frozen_string_literal: true

class PushService
  # Stands in for a real push provider. A real provider is later dropped in
  # behind the same name, and nothing else changes.
  def deliver(subscription, message)
    # In this first version there is no provider and no credential, so the
    # delivery is recorded as done on the machine, for the tests and the
    # local run.
    Rails.logger.info "PushService delivering message #{message.inspect} to subscription #{subscription.id}"
  end
end
