import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';
import PlayerReducer from './player_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TrackReducer,
  player: PlayerReducer,
  users: UserReducer
});

export default RootReducer;
