import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack, updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track)),
  updateTrack: (track) => dispatch(updateTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm)
