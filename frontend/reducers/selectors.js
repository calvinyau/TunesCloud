import { values } from 'lodash';

export const selectAllTracks = ( {tracks} ) => {
  return values(tracks.tracks);
}
