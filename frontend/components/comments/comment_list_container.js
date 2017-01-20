import { connect } from 'react-redux';
import CommentList from './comment_list';
import { fetchUsers } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  let comments;
  comments = ownProps.track ? ownProps.track.comments : [];
  return {
    track: ownProps.track,
    comments: comments,
    users: state.users.users || {}
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
