import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchTracks = () => dispatch => {
  APIUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchTrack = id => dispatch => {
  APIUtil.fetchTrack(id).then(track => dispatch(receiveTrack(track)));
}

export const createTrack = track => dispatch => {
  APIUtil.createTrack(track).then(track => dispatch(receiveTrack(track)));
}

export const updateTrack = track => dispatch => {
  APIUtil.updateTrack(tracl).then(track => dispatch(receiveTrack(track)));
}

export const deleteTrack = track => dispatch => {
  APIUtil.deleteTrack(track).then(track => dispatch(receiveTrack(null)));
}
