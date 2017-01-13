export const fetchTracks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
  });
};

export const fetchTrack = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  });
};

export const createTrack = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data
  });
};

export const updateTrack = (track) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.track.id}`,
    data: track
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  });
};
