import React from 'react';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tracks;
    if (this.props.tracks) {
      tracks = this.props.tracks.map((track, index) => (
        <li key={index}>
          {track.name}
          <br />
          Uploaded by:{track.userId}
        </li>
      ));
    }

    return (
      <div className="track-index">
        <ul className="track-index-list">
          {tracks}
        </ul>
      </div>
    );
  }
}

export default TracksIndex;
