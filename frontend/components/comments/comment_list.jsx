import React from 'react';
import { Link } from 'react-router';
import CommentItem from './comment_item';
import sortBy from 'lodash/sortBy';
import orderBy from 'lodash/orderBy';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }



  render() {
    let { comments, users } = this.props;
    let list;
    if (comments) {
      comments = orderBy(comments, ['created_at'], ['desc']);
    }
    if (users) {
      // debugger;
      list = comments.map((comment, index) => {
        let commenter = users[comment.user_id];
        return (
          <li className="comment-list-item" key={index}>
            <CommentItem body={comment.body} commenter={commenter} createdAt={comment.created_at}/>
          </li>
        );
      });
    }

    return (
      <ul className="comment-list">
        {list}
      </ul>
    );
  }
}

export default CommentList;
