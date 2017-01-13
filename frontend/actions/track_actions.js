import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const fetchTracks = () => {
  APIUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchTrack = id => {
  APIUtil.fetchTrack().then(track => dispatch(receiveTrack(track)));
}

export const receiveTracks = tracks => {
  type: RECEIVE_TRACKS,
  tracks
};

export const receiveTrack = track => {
  type: RECEIVE_TRACK,
  track
}
