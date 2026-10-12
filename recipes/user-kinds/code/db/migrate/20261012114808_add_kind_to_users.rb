class AddKindToUsers < ActiveRecord::Migration[8.1]
  def change
    add_column :users, :kind, :string, null: false, default: "member"
  end
end
