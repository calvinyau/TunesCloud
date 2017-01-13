import React from 'react';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tracks;
    debugger;
    if (this.props.tracks) {
      tracks = this.props.tracks.map((track, index) => (
        <li key={index}>{track.name}</li>
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
