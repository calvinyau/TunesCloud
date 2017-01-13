import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  track: TrackReducer
});

export default RootReducer;
