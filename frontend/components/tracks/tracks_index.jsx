import React from 'react';
import { Link } from 'react-router';
import TrackItemContainer from './track_item_container';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tracks;
    if (this.props.tracks) {
      tracks = this.props.tracks.map((track, index) => (
        <li key={index} className="index-item">
          <TrackItemContainer track={track} />
        </li>
      ));
    }

    return (
      <div className="track-index">
        <div className="track-user-nav">
          <h2 className="selected-index">Tracks</h2>
          <h2><Link to="/home/users" className="index-link">Users</Link></h2>
        </div>
        <ul className="track-index-list">
          {tracks}
        </ul>
      </div>
    );
  }
}

export default TracksIndex;
