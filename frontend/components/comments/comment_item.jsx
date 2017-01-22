import React from 'react';
import { Link } from 'react-router';

const CommentItem = ({ body, commenter }) => {
  // debugger;
  let photo, username, commenterUrl;
  if (commenter) {
    photo = commenter.profile_photo_url ? commenter.profile_photo_url :
      "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
    username = commenter.username;
    commenterUrl = `/users/${commenter.id}`;
  }
  return (
    <div className="comment-item">
      <img src={photo} className="comment-item-photo"/>
      <div className="comment-item-text">
        <span className="comment-item-username"><Link to={commenterUrl}>{username}</Link></span>
        <br />
        <span>{body}</span>
      </div>
    </div>
  );
}

export default CommentItem;
