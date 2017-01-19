import React from 'react';

const CommentItem = ({ body, commenter }) => {
  const photo = commenter.profile_photo_url ? commenter.profile_photo_url :
    "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";

  return (
    <div className="comment-item">
      <img src="photo" className="comment-item-photo"/>
      <div className="comment-item-text">
        <span>{commenter.username}</span>
        <span>{body}</span>
      </div>
    </div>
  );
}

export default CommentItem;
