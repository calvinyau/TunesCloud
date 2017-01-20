# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guestAccount = User.create({username: "Demo", password: "123456", email:"demo@demo.com", profile_photo_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png"})

track0 = Track.create({name: "Daft Punk - Give Life Back to Music", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788011/Give_Life_Back_to_Music_rwqv9n.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Random_Access_Memories_izpzws.jpg", user_id: 2})
track1 = Track.create({name: "Christina Perri - Jar of Hearts", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470383/Christina_Perri_-_Jar_of_Hearts_kzuhyf.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484615761/zwir6mwpd8ewyos1prqj.png", user_id: 2})
track2 = Track.create({name: "Justin Timberlake - Mirrors", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Justin_Timberlake_-_Mirrors_wixzs6.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484470916/Justin-Timberlake-album-cover_qopwhz.jpg", user_id: 4})
track3 = Track.create({name: "Calvin Harris - I Need Your Love ft. Ellie Goulding", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Calvin_Harris_-_I_Need_Your_Love_ft._Ellie_Goulding_b4gspb.mp3",
   artwork_url: "", user_id: 5})
track4 = Track.create({name: "Justin Timberlake - Until the End of Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470391/Justin_Timberlake_-_Until_the_End_of_Time_n4d2ku.mp3",
   artwork_url: "", user_id: 6})
track5 = Track.create({name: "Imagine Dragons - It's Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788005/Imagine_Dragons_-_It_s_Time_rg0em7.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Imagine_Dragons_-_It_s_Time_rouqow.jpg", user_id: 7})
track6 = Track.create({name: "Macklemore - Thrift Shop", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787968/Macklemore_Ryan_Lewis_-_Thrift_Shop_ft._Wanz_ey5qjr.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Macklemore_-_Thrift_Shop_tz1hqm.jpg", user_id: 8})
track7 = Track.create({name: "David Guetta - The Alphabeat", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787969/David_Guetta_-_The_Alphabeat_anamky.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/David_Guetta_-_The_Alphabeat_single_cover_lwtcan.jpg", user_id: 9})
track8 = Track.create({name: "Passion Pit - Take a Walk", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787980/Passion_Pit_-_Take_A_Walk_kfdp2o.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/passion_pit_take_a_walk_dbvcnx.jpg", user_id: 10})
track9 = Track.create({name: "Frank Ocean - Thinking About You", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788884/Frank_Ocean_-_Thinking_About_You_ybc2fd.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484703806/channel_orange.jpg", user_id: 11})




avatar_urls = [
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-bb-8.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-boba-fett.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-c-3po.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-chewbacca.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-darth_maul.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-darth-vader.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-princess_amidala.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-r2-d2.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-royal_guard.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880310/Star%20Wars%20Avatars/starwars-stormtrooper.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-the_emperor.png",
  "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484880291/Star%20Wars%20Avatars/starwars-yoda.png"
]


20.times do

  username = Faker::StarWars.unique.character
  sample_pic = avatar_urls.sample

  user = User.create({
      username: username,
      email: Faker::Internet.email(username),
      password: "123456",
      profile_photo_url: sample_pic
  })
end

comments = []
100.times do
  quote = Faker::StarWars.quote
  comments.push(quote)

  comment = Comment.create({
      body: quote,
      user_id: Random.rand(19) + 1,
      track_id: Random.rand(9) + 1
    })
end
