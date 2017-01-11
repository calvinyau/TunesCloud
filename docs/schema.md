# Schema information

## users

column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
username           | string    | not null, indexed, unique
email              | string    | not null, indexed, unique
password_digest    | string    | not null
session_token      | string    | not null, indexed, unique
profile_photo_url  | string    |

## tracks

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
track_url       | string    | not null, indexed
artwork_url     | string    |
user_id         | integer   | not null

## comments

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null
body            | text      | not null
track_id        | integer   | not null
