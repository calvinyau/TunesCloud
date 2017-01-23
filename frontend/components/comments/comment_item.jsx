import React from 'react';
import { Link } from 'react-router';

const timeSince = (date) => {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
      return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
      return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
      return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
      return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
      return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

const CommentItem = ({ body, commenter, createdAt }) => {
  // debugger;
  let photo, username, commenterUrl;
  if (commenter) {
    photo = commenter.profile_photo_url ? commenter.profile_photo_url :
      "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
    username = commenter.username;
    commenterUrl = `/users/${commenter.id}`;
  }
  console.log(new Date(createdAt));
  return (
    <div className="comment-item">
      <img src={photo} className="comment-item-photo"/>
      <div className="comment-item-text">
        <div className="username-timeago">
          <span className="comment-item-username"><Link to={commenterUrl}>{username}</Link></span>
          <span>{timeSince(new Date(createdAt))} ago</span>
        </div>
        <br />
        <span>{body}</span>
      </div>
    </div>
  );
}

export default CommentItem;
