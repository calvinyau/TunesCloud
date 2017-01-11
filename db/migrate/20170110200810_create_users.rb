class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.string :profile_photo_url

      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
