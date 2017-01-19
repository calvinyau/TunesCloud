export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const deleteUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  });
};
