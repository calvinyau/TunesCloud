import React from 'react';
import { Link } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState( { [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, {
      track_id: this.props.trackId,
      user_id: this.props.currentUser.id
    });
    this.props.createComment({comment});
    $("#comment-input").val("");
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={ this.handleSubmit }>
          <br/>
          <input type="text" placeholder="Write a comment" className="comment-form-text"
            onChange={this.update("body")} id="comment-input" />
          <br/>
          <input type="submit" className="submit"/>
        </form>
      </div>
    );
  }
}

export default CommentForm;
