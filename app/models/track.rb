# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  name        :string
#  track_url   :string
#  artwork_url :string
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :name, :track_url, :user_id, presence: true

end
