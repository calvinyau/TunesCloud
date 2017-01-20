import React from 'react';
import { Link } from 'react-router';
import CommentItem from './comment_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const list = () => {
      return (
        this.props.comments.map((comment) =>
            <li>
              <CommentItem body={comment.body} commenter={comment.user_id}/>
            </li>
          )
      );
    }

    debugger;
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default CommentList;
