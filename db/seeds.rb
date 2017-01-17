# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guestAccount = User.create({username: "Guest", password: "123456", email:"guest@guest.com", profile_photo_url: ""})
user1 = User.create({username: "Spongebob Squarepants", password: "123456", email:"user1@user.com", profile_photo_url: ""})
user2 = User.create({username: "Patrick Star", password: "123456", email:"user2@user.com", profile_photo_url: ""})
user3 = User.create({username: "Squidward Tentacles", password: "123456", email:"user3@user.com", profile_photo_url: ""})
user4 = User.create({username: "Red Power Ranger", password: "123456", email:"user4@user.com", profile_photo_url: ""})
user5 = User.create({username: "Optimus Prime", password: "123456", email:"user5@user.com", profile_photo_url: ""})
user6 = User.create({username: "Megatron", password: "123456", email:"user6@user.com", profile_photo_url: ""})

track1 = Track.create({name: "Christina Perri - Jar of Hearts", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470383/Christina_Perri_-_Jar_of_Hearts_kzuhyf.mp3", artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484615761/zwir6mwpd8ewyos1prqj.png", user_id: 1})
track2 = Track.create({name: "Justin Timberlake - Mirrors", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Justin_Timberlake_-_Mirrors_wixzs6.mp3", artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484470916/Justin-Timberlake-album-cover_qopwhz.jpg", user_id: 1})
track3 = Track.create({name: "Calvin Harris - I Need Your Love ft. Ellie Goulding", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Calvin_Harris_-_I_Need_Your_Love_ft._Ellie_Goulding_b4gspb.mp3", artwork_url: "", user_id: 2})
track4 = Track.create({name: "Justin Timberlake - Until the End of Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470391/Justin_Timberlake_-_Until_the_End_of_Time_n4d2ku.mp3", artwork_url: "", user_id: 2})
