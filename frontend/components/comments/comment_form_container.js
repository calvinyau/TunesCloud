import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    trackId: ownProps.trackId
  }
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
