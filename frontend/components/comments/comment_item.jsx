import React from 'react';

const CommentItem = ({ body, commenter }) => {
  // debugger;
  let photo, username;
  if (commenter) {
    photo = commenter.profile_photo_url ? commenter.profile_photo_url :
      "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
    username = commenter.username;
  }

  return (
    <div className="comment-item">
      <img src={photo} className="comment-item-photo"/>
      <div className="comment-item-text">
        <span>{username}</span>
        <br />
        <span>{body}</span>
      </div>
    </div>
  );
}

export default CommentItem;
