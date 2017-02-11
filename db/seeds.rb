# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guestAccount = User.create({username: "Demo User", password: "123456", email:"demo@demo.com", profile_photo_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png"})



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


25.times do

  username = Faker::StarWars.unique.character
  sample_pic = avatar_urls.sample

  user = User.create({
      username: username,
      email: Faker::Internet.email(username),
      password: "123456",
      profile_photo_url: sample_pic
  })
end

track1 = Track.create({name: "Christina Perri - Jar of Hearts", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470383/Christina_Perri_-_Jar_of_Hearts_kzuhyf.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484611075/jar-of-hearts-album-cover_tlydxv.png", user_id: (Random.rand(26) + 1)})
track2 = Track.create({name: "Justin Timberlake - Mirrors", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Justin_Timberlake_-_Mirrors_wixzs6.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484470916/Justin-Timberlake-album-cover_qopwhz.jpg", user_id: (Random.rand(26) + 1)})
track3 = Track.create({name: "Calvin Harris - I Need Your Love ft. Ellie Goulding", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470392/Calvin_Harris_-_I_Need_Your_Love_ft._Ellie_Goulding_b4gspb.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484949391/Calvin-Harris-ft.-Ellie-Goulding-I-Need-Your-Love-Louis-La-Roche-Remix_enfbyw.jpg", user_id: (Random.rand(26) + 1)})
track4 = Track.create({name: "Justin Timberlake - Until the End of Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484470391/Justin_Timberlake_-_Until_the_End_of_Time_n4d2ku.mp3",
   artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484949392/JT_Until_the_End_of_Time_artwork_tqh326.png", user_id: (Random.rand(26) + 1)})
track5 = Track.create({name: "Imagine Dragons - It's Time", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788005/Imagine_Dragons_-_It_s_Time_rg0em7.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Imagine_Dragons_-_It_s_Time_rouqow.jpg", user_id: (Random.rand(26) + 1)})
track6 = Track.create({name: "Macklemore - Thrift Shop", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787968/Macklemore_Ryan_Lewis_-_Thrift_Shop_ft._Wanz_ey5qjr.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Macklemore_-_Thrift_Shop_tz1hqm.jpg", user_id: (Random.rand(26) + 1)})
track7 = Track.create({name: "David Guetta - The Alphabeat", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787969/David_Guetta_-_The_Alphabeat_anamky.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/David_Guetta_-_The_Alphabeat_single_cover_lwtcan.jpg", user_id: (Random.rand(26) + 1)})
track8 = Track.create({name: "Passion Pit - Take a Walk", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484787980/Passion_Pit_-_Take_A_Walk_kfdp2o.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/passion_pit_take_a_walk_dbvcnx.jpg", user_id: (Random.rand(26) + 1)})
track9 = Track.create({name: "Frank Ocean - Thinking About You", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788884/Frank_Ocean_-_Thinking_About_You_ybc2fd.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484703806/channel_orange.jpg", user_id: (Random.rand(26) + 1)})


track11 = Track.create({name: "Bastille - Pompeii", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942423/Tracks/Bastille_-_Pompeii.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943369/bastille_pompeii_artwork_jumxox.jpg", user_id: (Random.rand(26) + 1)})
track12 = Track.create({name: "Bastille - Things We Lost in the Fire", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942192/Tracks/Bastille_-_Things_We_Lost_in_the_Fire.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943369/Bastille-Things-We-Lost-in-the-Fire-artwork_nimhav.jpg", user_id: (Random.rand(26) + 1)})
track13 = Track.create({name: "Disclosure - Latch ft. Sam Smith", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942507/Tracks/Disclosure_-_Latch_feat._Sam_Smith.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943370/Disclosure_-_Latch__feat._Sam_Smith_smof3x.png", user_id: (Random.rand(26) + 1)})
track14 = Track.create({name: "Fall Out Boy - Young Volcanoes", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942144/Tracks/Fall_Out_Boy_-_Young_Volcanoes.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943369/fallout-boy-save-rock-and-roll-album-cover_v7mufl.jpg", user_id: (Random.rand(26) + 1)})
track15 = Track.create({name: "Lupe Fiasco - Old School Love ft. Ed Sheeran", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942461/Tracks/Lupe_Fiasco_-_Old_School_Love_ft._Ed_Sheeran.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943370/lupefiasco-oldschoollove_yaxt8r.jpg", user_id: (Random.rand(26) + 1)})
track16 = Track.create({name: "MKTO - Classic", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942120/Tracks/MKTO_-_Classic.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943371/MKTO_Classic_artwork_csw7dy.png", user_id: (Random.rand(26) + 1)})

track18 = Track.create({name: "OneRepublic - Secrets", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942421/Tracks/OneRepublic_-_Secrets.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484948827/OneRepublic_Secrets_oxmsea.jpg", user_id: (Random.rand(26) + 1)})
track19 = Track.create({name: "Sia - Chandelier", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942455/Tracks/Sia_-_Chandelier.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484948916/Sia_Chandelier_xbsvkv.png", user_id: (Random.rand(26) + 1)})
track20 = Track.create({name: "The Neighborhood - Sweater Weather", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942395/Tracks/The_Neighbourhood_-_Sweater_Weather.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484949102/sweater_weather_artwork_upgevb.jpg", user_id: (Random.rand(26) + 1)})
track17 = Track.create({name: "OneRepublic - Feel Again", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942130/Tracks/OneRepublic_-_Feel_Again.mp3",
    artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484948837/onerepublic_feel_again_artwork_cyjchn.png", user_id: (Random.rand(26) + 1)})
track10 = Track.create({name: "American Authors - Believer", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484942127/Tracks/American_Authors_-_Believer.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484943369/American_Authors_Believer_artwork_mxszzl.jpg", user_id: (Random.rand(26) + 1)})
track21 = Track.create({name: "Daft Punk - Give Life Back to Music", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1484788011/Give_Life_Back_to_Music_rwqv9n.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484788177/Random_Access_Memories_izpzws.jpg", user_id: (Random.rand(26) + 1)})
track22 = Track.create({name: "Flume - Say It ft. Tove Lo (Illenium Remix)", track_url: "http://res.cloudinary.com/dsvfpq1b7/video/upload/v1486825283/Flume_-_Say_It_ft._Tove_Lo_Illenium_Remix_tnwamn.mp3",
  artwork_url: "http://res.cloudinary.com/dsvfpq1b7/image/upload/c_scale,w_200/v1486825265/Flume-Say-It-Illenium-Remix-Cover_khaayo.jpg", user_id: (Random.rand(26) + 1)})
# track23 = Track.create({name: "", track_url: "",
#   artwork_url: "", user_id: (Random.rand(26) + 1)})
# track24 = Track.create({name: "", track_url: "",
#   artwork_url: "", user_id: (Random.rand(26) + 1)})

100.times do
  quote = Faker::StarWars.quote

  comment = Comment.create({
      body: quote,
      user_id: Random.rand(26) + 1,
      track_id: Random.rand(22) + 1
    })
end
