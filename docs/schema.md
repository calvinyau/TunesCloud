# Schema information

## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
track_name      | string    | not null, indexed
artwork_url     | string    | not null
user_id         | integer   | not null

## comments

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null
body            | text      | not null
track_id        | integer   | not null
