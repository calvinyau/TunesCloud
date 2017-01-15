import { connect } from 'react-redux';
import TrackItem from './track_item';
import { fetchSong } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (id) => dispatch(fetchTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackItem);
