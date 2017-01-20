# Component Hierarchy

## Component Hierarchy

**App**
 - NavigationBar

**LoggedInApp**
 - NavigationBarContainer
 - PlayerContainer

**NavigationBarContainer**
 - NavigationBar

**PlayerContainer**
 - Player

**SessionFormContainer**
 - SessionForm

**TrackIndexContainer**
 - TrackIndex
  - TrackItemContainer

**TrackItemContainer**
 - TrackItem

**TrackFormContainer**
 - TrackForm

**UserShowContainer**
 - UserShow

**TrackShowContainer**
 - TrackShow
  - CommentFormContainer
  - CommentListContainer

**CommentFormContainer**
 - CommentForm

**CommentListContainer**
 - CommentList

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "SessionFormContainer" |
| "/sign-in" | "SessionFormContainer" |
| "/home" | "LoggedInApp" |
| "/track/:trackId" | "TrackContainer" |
| "/user/:userId" | "UserContainer" |
