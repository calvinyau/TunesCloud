# TunesCloud

[TunesCloud Live][sitelink]
[sitelink]: http://tunescloud.stream

TunesCloud is a music streaming web application inspired by SoundCloud. Users can create an account to upload tracks, listen to their own as well as other users' content and leave their thoughts.

## Features

- User accounts w/ authentication
- Creating music tracks w/ artwork
- Playing music without interruption
- Creating comments on tracks
- Viewing user profiles
- Viewing track profiles

![login][login]

![home][home]

![upload][upload]


[login]: ./docs/images/login.png
[home]: ./docs/images/home.png
[upload]: ./docs/images/upload.png

## Design

The component hierarchy, a sample of the state, the schema, API endpoints, and initial wireframe mockups can be found here:

[Component Hierarchy][components]

[Sample State][state]

[Schema][schema]

[API Endpoints][endpoints]

[components]: ./docs/component-hierarchy.md
[state]: ./docs/sample-state.md
[schema]: ./docs/schema.md
[endpoints]: ./docs/api-endpoints.md

[Initial Wireframes][wireframes]
[wireframes]: ./docs/wireframes

## Technology Stack

TunesCloud is a single-page web application built on Ruby on Rails for the backend and React.js in combination with Redux for the frontend.

#### Backend
Hosting: Heroku

Database: PostgreSQL RDBMS

File Hosting: Cloudinary

#### Frontend

Frontend Dependencies: npm

File Bundling: Webpack

API Calls: jQuery AJAX

Javascript Utility Library: Lodash

File Player: react-player-container

## Future Features
- Wave Forms
- Playlists
- Likes
