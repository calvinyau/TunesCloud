export const fetchTracks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
  });
};

export const fetchTrack = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/track/${id}`
  });
};

export const createTrack = (data) => {
  return $.ajax({
    method: 'POST',
    url: `api/track`,
    data
  });
};
