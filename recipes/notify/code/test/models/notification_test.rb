require "test_helper"

class NotificationTest < ActiveSupport::TestCase
  # Long enough that a console showing only its beginning would not hold it in
  # full.
  MESSAGE = "The safety sign at the east entrance was reported damaged during the night shift, " \
            "so please inspect it and fit a replacement before the morning shift starts."

  test "an event makes one notification with three deliveries in order" do
    assert_difference "Notification.count", 1 do
      assert_difference "Delivery.count", 3 do
        @notification = Notification.raise_for(event: "safety sign", message: MESSAGE, user: users(:one))
      end
    end

    assert_equal "safety sign", @notification.event
    assert_equal MESSAGE, @notification.message
    assert_equal %w[ console email push ], @notification.deliveries.map(&:channel)
    assert_equal "delivered", @notification.deliveries.first.status
  end

  test "a failed email does not stop the push" do
    user = users(:one)
    user.create_push_subscription!

    @notification = nil
    with_a_failing_mailer do
      @notification = Notification.raise_for(event: "safety sign", message: MESSAGE, user: user)
    end

    email = @notification.deliveries.find { |delivery| delivery.channel == "email" }
    push = @notification.deliveries.find { |delivery| delivery.channel == "push" }

    assert_equal "failed", email.status
    assert email.failure_reason.present?
    assert_equal "delivered", push.status
  end

  test "a holder with no push subscription gets two deliveries and the record says why" do
    notification = Notification.raise_for(event: "safety sign", message: MESSAGE, user: users(:one))
    delivered = notification.deliveries.select { |delivery| delivery.status == "delivered" }
    push = notification.deliveries.find { |delivery| delivery.channel == "push" }

    assert_equal %w[ console email ], delivered.map(&:channel)
    assert_not_equal "delivered", push.status
    assert push.failure_reason.present?
  end

  private
    # The mail server is down for the length of the block: the email delivery
    # records the failure, and the push after it must still go.
    def with_a_failing_mailer
      NotificationMailer.define_singleton_method(:notification) { |*| raise "the mail server is down" }
      yield
    ensure
      NotificationMailer.singleton_class.send(:remove_method, :notification)
    end
end
