# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string
#  email             :string
#  password_digest   :string
#  session_token     :string
#  profile_photo_url :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  # validates :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(128)
  end
end
