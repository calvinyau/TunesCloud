export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT = "LOGOUT";

import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logoutUser = (currentUser) => ({
  type: LOGOUT,
  currentUser
});

export const login = user => dispatch => (
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user1 => dispatch(logoutUser(user1)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user1 => dispatch(receiveCurrentUser(user1)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
