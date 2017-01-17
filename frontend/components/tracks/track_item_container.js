import { connect } from 'react-redux';
import TrackItem from './track_item';
import { fetchSong } from '../../actions/track_actions';
import { playTrack, pauseTrack } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  playing: state.player.playing,
  track: ownProps.track
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackItem);
