import { connect } from 'react-redux';
import UserShow from './user_show';
import { playTrack, pauseTrack } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.params.id

});

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
