import { connect } from 'react-redux';
import TrackShow from './track_show';
import { playTrack, pauseTrack } from '../../actions/player_actions';
import { selectAllTracks } from '../../reducers/selectors';
// import {  } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    tracks: state.tracks.tracks,
    // track: state.tracks.tracks[ownProps.params.id],
    currentUser: state.session.currentUser,
    trackId: ownProps.params.id,
    playing: state.player.playing,
    currentTrack: state.player.track
  });
}

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
