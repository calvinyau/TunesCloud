import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let track;
    let trackName;
    if (this.props.tracks) {
      // debugger;
      const trackId = this.props.trackId;
      track = this.props.tracks[trackId];
      trackName = track.name;
    }

    return (
      <div>
        <div className="show-details">
          {trackName}
        </div>
      </div>
    );
  }
}

export default TrackShow;
