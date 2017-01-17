import { RECEIVE_TRACKS, RECEIVE_TRACK, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/track_actions';
import merge from 'lodash/merge';

const nullTracks = Object.freeze({
  tracks: null,
  errors: []
});

const TrackReducer = (state = nullTracks, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      const tracks = action.tracks;
      return merge({}, nullTracks, {
        tracks: tracks
      });
    case RECEIVE_TRACK:
      const track = action.track;
      let newState = merge({}, state, {
        tracks: { [track.id]: track }
      });
      return newState;
    case RECEIVE_ERRORS:
      const err = action.errors;
      return merge({}, state, {
        errors: err
      });
    case CLEAR_ERRORS:
      return nullTracks;
    default:
      return state;
  }
};

export default TrackReducer;
