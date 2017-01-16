import { connect } from 'react-redux';
import Player from './player';
import { playTrack, pauseTrack } from '../../actions/player_actions';

const mapStateToProps = ({player}) => ({
  track: player.track,
  playing: player.playing
});

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
