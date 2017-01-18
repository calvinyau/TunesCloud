import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let track, trackName, trackUsername, trackArtworkUrl;
    let trackDetails;
    if (this.props.tracks) {
      // debugger;
      track = this.props.tracks[this.props.trackId];
      trackName = track.name;
      trackUsername = track.user.username;
      trackArtworkUrl = track.artwork_url;
    }

    return (
      <div className="track-show-container">
        <div className="track-show-header">
          <div className="track-show-details">
            <div className="text-details">
              <div className="username">{trackUsername}</div>
              <div className="track-name">{trackName}</div>
            </div>
            <img className="track-show-artwork" src={trackArtworkUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;
