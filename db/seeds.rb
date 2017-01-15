# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guestAccount = User.create({username: "Guest", password: "123456", email:"guest@guest.com", profile_photo_url: ""})
user1 = User.create({username: "User1", password: "123456", email:"user1@user.com", profile_photo_url: ""})
user2 = User.create({username: "User2", password: "123456", email:"user2@user.com", profile_photo_url: ""})
user3 = User.create({username: "User3", password: "123456", email:"user3@user.com", profile_photo_url: ""})
user4 = User.create({username: "User4", password: "123456", email:"user4@user.com", profile_photo_url: ""})
user5 = User.create({username: "User5", password: "123456", email:"user5@user.com", profile_photo_url: ""})
user6 = User.create({username: "User6", password: "123456", email:"user6@user.com", profile_photo_url: ""})

track1 = Track.create({name: "Icona Pop X Louis The Child x Hibell - Last Night", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484469702/Last_Night_Icona_Pop_x_Louis_The_Child_x_Hibell_thjafo.mp3", artwork_url: "", user_id: 1})
track2 = Track.create({name: "Justin Timberlake - Mirrors", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Justin_Timberlake_-_Mirrors_wixzs6.mp3", artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484470916/Justin-Timberlake-album-cover_qopwhz.jpg", user_id: 1})
track3 = Track.create({name: "Calvin Harris - I Need Your Love ft. Ellie Goulding", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Calvin_Harris_-_I_Need_Your_Love_ft._Ellie_Goulding_b4gspb.mp3", artwork_url: "", user_id: 2})
track4 = Track.create({name: "Justin Timberlake - Until the End of Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470391/Justin_Timberlake_-_Until_the_End_of_Time_n4d2ku.mp3", artwork_url: "", user_id: 2})
