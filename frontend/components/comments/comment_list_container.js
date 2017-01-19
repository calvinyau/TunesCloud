import { connect } from 'react-redux';
import CommentList from './comment_list';


const mapStateToProps = (state, ownProps) => ({
  track: ownProps.params.track
  comments: ownProps.params.track.comments
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
