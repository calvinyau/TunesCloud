import { connect } from 'react-redux';
import TrackShow from './track_show';
import { playTrack, pauseTrack } from '../../actions/player_actions';
import { selectAllTracks } from '../../reducers/selectors';
// import {  } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return ({
    tracks: state.tracks.tracks,
    currentUser: state.session.currentUser,
    trackId: ownProps.params.id
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
