import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndex from './tracks_index';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
