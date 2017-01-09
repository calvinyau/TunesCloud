# Component Hierarchy

## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - NavigationBar
 - TrackList
  - Track
    - TrackDuration
 - MusicPlayer
  - PlayButton
  - BackTrackButton
  - ForwTrackButton
  - TrackDuration

**UserContianer**
 - Profile
 - TrackList
  - Track
    - TrackDuration

**TrackContainer**
 - Track
  - TrackDuration
 - CommentList
  - Comment

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/track/:trackId" | "TrackContainer" |
| "/home/user/:userId" | "UserContainer" |
