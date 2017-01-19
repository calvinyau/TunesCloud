class Comment < ApplicationRecord
  validates :body, :track, presence: true
  belongs_to :track
end
