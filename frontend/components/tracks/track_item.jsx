import React from 'react';
import { Link, hashHistory} from 'react-router';

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
    const trackArtwork = trackItem.artwork_url === "" ? trackItem.artwork_url :
      "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484354963/headphones_vw9muh.jpg";
    let playPauseIcon;
    if (this.props.playing) {
      playPauseIcon = this.props.track.name === this.props.currentTrack.name ? "fa fa-pause-circle fa-3x" : "fa fa-play-circle fa-3x"
    } else {
      playPauseIcon = "fa fa-play-circle fa-3x";
    }
    const trackUrl = `/tracks/${this.props.track.id}`;

    return (
      <div className="track-item">
        <img className="track-item-artwork" src={trackArtwork}/>
        <div className="track-detail-container">
          <button className="track-item-play-button" onClick={this.togglePlay}>
            <i className={playPauseIcon}></i>
          </button>
          <div className="track-item-details">
            <span className="track-item-detail-user">
              {trackItem.user.username}
            </span>
            <br />
            <span className="track-item-detail-title">
              <Link to={trackUrl}>
                {trackItem.name}
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
