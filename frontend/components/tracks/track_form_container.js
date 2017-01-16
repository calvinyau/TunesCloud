import { connect } from 'react-redux';
import TrackFrom from './track_form';
import { createTrack, updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack()),
  updateTrack: (track) => dispatch(updateTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm)
