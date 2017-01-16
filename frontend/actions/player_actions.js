export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export const playTrack = track => ({
  type: PLAY_TRACK,
  track
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});
