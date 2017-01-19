import { RECEIVE_USERS, RECEIVE_USER, RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const nullUsers = Object.freeze({
  users: null,
  errors: []
});

const UserReducer = (state = nullUsers, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, nullUsers, {
        users: users
      });
    case RECEIVE_USER:
      const user = action.user;
      let newState = merge({}, state, {
        users: { [user.id]: user }
      });
      return newState;
    case RECEIVE_USER_ERRORS:
      const err = action.errors;
      return merge({}, state, {
        errors: err
      });
    case CLEAR_USER_ERRORS:
      return nullUsers;
    default:
      return state;
  }
};

export default UserReducer;
