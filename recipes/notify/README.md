Notify: one event tells its account holder by console message, then email, then push, the message shown in full.

# Notify

## What it is

An event raises one notification for the account holder. The notification keeps the event name and the message in full, and has three deliveries in order: console, email, push. The console delivery is the message kept and shown in full in the holder's own message list. The email delivery sends the message in full by email. The push delivery goes through a generically named push service standing in locally: no provider and no credentials. A failed channel does not stop the one after it: a failed email still tries push, and a holder with no push subscription gets two deliveries and a record says why the push did not go.

## The files

Added:

- app/models/notification.rb: the notification, its event, its message in full, its holder, and its three deliveries in order, and the one way to raise one for an event.
- app/models/delivery.rb: one delivery, its channel (console, email or push), its status, and why it did not go when it did not; it performs its own channel.
- app/models/push_subscription.rb: the push subscription a holder keeps.
- app/services/push_service.rb: the push service, generically named, standing in locally.
- app/mailers/notification_mailer.rb: the email delivery, through ActionMailer.
- app/views/notification_mailer/notification.html.erb: the email, carrying the message in full.
- app/controllers/notifications_controller.rb: the console: a holder's own messages and no one else's.
- app/views/notifications/index.html.erb: the list, each message shown in full.
- db/migrate/20261015120000_create_notifications.rb: the notifications table.
- db/migrate/20261015120001_create_deliveries.rb: the deliveries table.
- db/migrate/20261015120002_create_push_subscriptions.rb: the push subscriptions table.
- test/models/notification_test.rb: the model tests.
- test/controllers/notifications_controller_test.rb: the console test.

Changed, whole, each described under What to wire:

- app/models/user.rb: the holder's messages and their push subscription.
- config/routes.rb: the console's route.
- db/seeds.rb: one holder with one message.

## Generic names

- Notification, Delivery, PushSubscription: the models. A spec may call people and events something else; the tables, the associations and the one way to raise a notification follow the names.
- PushService: the push service. A real provider is later dropped in behind the same name, and nothing else changes.
- NotificationMailer: the email mailer.

## What to wire

Each file beneath that this feature changes, and what the change does:

- app/models/user.rb: add has_many :notifications and has_one :push_subscription.
- config/routes.rb: add resources :notifications, only: :index.
- db/seeds.rb: add a test holder with one notification with three deliveries, in development only.

## The tests

- test/models/notification_test.rb: an event makes one notification with three deliveries in order; a failed email does not stop the push; a holder with no push subscription gets two deliveries and the record says why.
- test/controllers/notifications_controller_test.rb: the console shows the message in full.

## Checks it meets

none

The house check recipes/check notify runs the Recipe's own tests, lint and scan on the base. The spec's text checks assert the README, the manifest, the files and the test names.