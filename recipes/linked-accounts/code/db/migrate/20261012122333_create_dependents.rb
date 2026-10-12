class CreateDependents < ActiveRecord::Migration[8.1]
  def change
    create_table :dependents do |t|
      t.string :name, null: false
      t.date :birthdate

      t.timestamps
    end
  end
end
