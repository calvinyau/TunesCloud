class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :track_url
      t.string :artwork_url
      t.integer :user_id

      t.timestamps
    end

    add_index :tracks, :name
    add_index :tracks, :track_url
  end
end
