import React from 'react';
import { Link } from 'react-router';
import CommentItem from './comment_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    debugger;
    const { comments, users } = this.props;
    const list = comments.map((comment, index) => {
        let commenter = users[comment.user_id];
        return (
          <li className="comment-list-item" key={index}>
            <CommentItem body={comment.body} commenter={commenter}/>
          </li>
        );
      });

    return (
      <ul className="comment-list">
        {list}
      </ul>
    );
  }
}

export default CommentList;
