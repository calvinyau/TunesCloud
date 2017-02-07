import React from 'react';
import { Link, hashHistory} from 'react-router';

import Wavesurfer from 'react-wavesurfer';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.stopPropagation();
    if (this.props.track.id === this.props.currentTrack.id) {
      this.props.playing ? this.props.pauseTrack() : this.props.playTrack(this.props.track);
    } else {
      this.props.pauseTrack();
      this.props.playTrack(this.props.track);
    }
  }

  render() {
    const trackItem = this.props.track;
    const trackArtwork = trackItem.artwork_url === "" ?
      "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484354963/headphones_vw9muh.jpg"
      : trackItem.artwork_url;
    let playPauseIcon;
    if (this.props.playing) {
      playPauseIcon = this.props.track.name === this.props.currentTrack.name ? "fa fa-pause-circle fa-3x" : "fa fa-play-circle fa-3x"
    } else {
      playPauseIcon = "fa fa-play-circle fa-3x";
    }
    const trackUrl = `/tracks/${this.props.track.id}`;
    const uploaderUrl = `users/${this.props.track.user_id}`;

    return (
      <div className="track-item">
        <Link to={trackUrl}>
          <img className="track-item-artwork" src={trackArtwork}/>
        </Link>
        <div className="track-detail-container">
          <button className="track-item-play-button" onClick={this.togglePlay}>
            <i className={playPauseIcon}></i>
          </button>
          <div className="track-item-detail-container">
            <span className="track-item-detail username">
              <Link to={uploaderUrl}>
                {trackItem.user.username}
              </Link>
            </span>
            <br />
            <span className="track-item-detail track-name">
              <Link to={trackUrl}>
                {trackItem.name}
              </Link>
            </span>
            {/*
              <Wavesurfer
              audioFile={this.props.track.track_url}
              pos={}
              />
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
