class CreateApiTokens < ActiveRecord::Migration[8.1]
  def change
    create_table :api_tokens do |t|
      t.references :user, null: false, foreign_key: true
      # The SHA-256 digest of the token, never the token itself.
      t.string :token_digest, null: false
      t.string :device_name, null: false
      t.datetime :last_used_at

      t.timestamps
    end
    add_index :api_tokens, :token_digest, unique: true
  end
end
