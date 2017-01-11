```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  tracks: {
    1: {
      id: 1,
      name: "Sample State",
      track_url: "api/track/1",
      user_id: 1,
      artwork_url: "asdasd"
    }
  },
  comments: {
    1: {
      user_id: 1,
      track_id: 1,
      body: "so cool"
    }
  },
  currentTrack: {
    id: 2,
    name: "sample_track",
    track_url: "api/track/1",
    user_id: 1,
    artwork_url: "pretty-pic"
    elapsed_time: [Date object]
  }
}
```
