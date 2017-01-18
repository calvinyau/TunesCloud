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
      debugger;
    }

    return (
      <div>
        <div className="show-details">
          <div>{trackUsername}</div>
          <div>{trackName}</div>
          <img src={trackArtworkUrl}/>
        </div>
      </div>
    );
  }
}

export default TrackShow;
