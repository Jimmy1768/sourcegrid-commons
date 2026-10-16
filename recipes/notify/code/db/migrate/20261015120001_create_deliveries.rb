class CreateDeliveries < ActiveRecord::Migration[8.1]
  def change
    create_table :deliveries do |t|
      t.references :notification, null: false, foreign_key: true
      t.string :channel, null: false
      t.string :status
      t.text :failure_reason

      t.timestamps
    end
  end
end
