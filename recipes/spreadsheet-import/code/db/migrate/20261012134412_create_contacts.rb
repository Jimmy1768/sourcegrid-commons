class CreateContacts < ActiveRecord::Migration[8.1]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.date :joined_on

      t.timestamps
    end
    add_index :contacts, :email, unique: true
  end
end
