import { connect } from 'react-redux';
import TrackIndex from './tracks_index';
import { selectAllTracks } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  tracks: ownProps.tracks || selectAllTracks(state)
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps
)(TrackIndex);
