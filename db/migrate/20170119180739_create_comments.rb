class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :track_id
      t.integer :user_id

      t.timestamps
    end

    add_index :comments, :track_id
  end
end
