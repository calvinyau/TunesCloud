import { RECEIVE_TRACKS, RECEIVE_TRACK, RECEIVE_ERRORS, CLEAR_ERRORS, RECEIVE_COMMENT } from '../actions/track_actions';
import merge from 'lodash/merge';

const nullTracks = Object.freeze({
  tracks: null,
  errors: []
});

const TrackReducer = (state = nullTracks, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TRACKS:
      const tracks = action.tracks;
      return merge({}, nullTracks, {
        tracks: tracks
      });
    case RECEIVE_TRACK:
      const track = action.track;
      newState = merge({}, state, {
        tracks: { [track.id]: track }
      });
      return newState;
    case RECEIVE_ERRORS:
      const err = action.errors;
      return merge({}, state, {
        errors: err
      });
    case RECEIVE_COMMENT:
      const comment = action.comment;
      newState = merge({}, state);
      newState[comment.track_id].comments.push(comment)
      return newState;
    case CLEAR_ERRORS:
      return nullTracks;
    default:
      return state;
  }
};

export default TrackReducer;
