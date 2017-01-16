import { PLAY_TRACK, PAUSE_TRACK } from '../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = {
  track: {},
  playing: false
}

const PlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_TRACK:
      return merge({}, state, {
        track: action.track,
        playing: true
      });
    case PAUSE_TRACK:
      return merge({}, state, {
        playing: false
      });
    default:
      return state;
  }
};

export default PlayerReducer;
