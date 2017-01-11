import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser: currentUser
      });
    case RECEIVE_ERRORS:
      const err = action.errors;
      return merge({}, nullUser, {
        errors: err
      });
    case LOGOUT:
      return merge({}, nullUser);
    default:
      return state;
  }

};

export default SessionReducer;
