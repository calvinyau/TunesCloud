import { connect } from 'react-redux';
import Player from './player';
import { playTrack, pauseTrack } from '../../actions/player_actions';
// import { fetchTrack } from '../../actions/track_actions';

const mapStateToProps = ({player, tracks}) => ({
  track: player.track,
  playing: player.playing,
  playlist: tracks.tracks
});

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
