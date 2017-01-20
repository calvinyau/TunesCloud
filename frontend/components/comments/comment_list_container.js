import { connect } from 'react-redux';
import CommentList from './comment_list';


const mapStateToProps = (state, ownProps) => {
  let comments;
  comments = ownProps.track ? ownProps.track.comments : [];
  return {
    track: ownProps.track,
    comments: comments,
    users: state.users.users
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
