class CreateUserDependents < ActiveRecord::Migration[8.1]
  def change
    create_table :user_dependents do |t|
      t.references :user, null: false, foreign_key: true
      t.references :dependent, null: false, foreign_key: true
      t.string :role, null: false, default: "caretaker"
      t.string :relationship_label

      t.timestamps
    end
    add_index :user_dependents, %i[ user_id dependent_id ], unique: true
  end
end
