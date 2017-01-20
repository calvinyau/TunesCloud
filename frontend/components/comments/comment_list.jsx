import React from 'react';
import { Link } from 'react-router';
import CommentItem from './comment_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let users = this.props ? this.props.users : [];
    debugger;
    const list =
    this.props.comments.map((comment, index) => {
      let commenter;
      commenter = users ? users[comment.user_id] : {};
      return (
        <li className="comment-list-item" key={index}>
          <CommentItem body={comment.body} commenter={commenter}/>
        </li>
      );
    });

    // debugger;
    return (
      <ul className="comment-list">
        {list}
      </ul>
    );
  }
}

export default CommentList;
