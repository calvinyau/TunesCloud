import { connect } from 'react-redux';
import UserShow from './user_show';
import { playTrack, pauseTrack } from '../../actions/player_actions';
import { fetchUsers, fetchUser, deleteUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    users: state.users.users,
    userId: ownProps.params.userId,
    playing: state.player.playing,
    currentTrack: state.player.track
  };
};

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  deleteUser: (user) => dispatch(deleteUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
