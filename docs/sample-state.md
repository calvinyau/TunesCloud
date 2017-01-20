```js
{
  player: {
    playing: false,
    track: [Track object]
  },

  session {
    currentUser: [User object]
  },

  tracks: {
    tracks : {
      1: {
        id: 1,
        name: "Sample State",
        track_url: "api/track/1",
        user_id: 1,
        artwork_url: "artwork@example.com",
        user: [User object],
        created_at: [Date object],
        updated_at: [Date object],
        comments: [
          0: {
            id,
            body: "Great track",
            track_id,
            user_id,
            created_at: [Date object],
            updated_at: [Date object]
          },
          1: {
            ...
          }
        ]
      }
    },
    errors : []
  },
  
  users: {
    users: {
      10: {
        email: "myemail@example.com",
        id: 10,
        profile_photo_url: "dasda@example.com",
        username: "Megaman"
      }
    },
    errors: []
  }
}
```
