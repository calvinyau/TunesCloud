import React from 'react';
import { Link, hashHistory} from 'react-router';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.playTrack = this.playTrack.bind(this);
  }

  playTrack() {
    console.log("Play clicked");
  }

  render() {
    const trackItem = this.props.track;
    let trackArtwork = trackItem.artwork_url;
    if (trackArtwork === "") {
      trackArtwork = "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484354963/headphones_vw9muh.jpg"
    }

    return (
      <div className="track-item">
        <img className="track-item-artwork" src={trackArtwork}/>
        <div className="track-detail-container">
          <button className="track-item-play-button" onClick={this.playTrack}>
            <i className="fa fa-play-circle fa-3x"></i>
          </button>
          <div className="track-item-details">
            <span className="track-item-detail-user">
              {trackItem.user.username}
            </span>
            <br />
            <span className="track-item-detail-title">
              {trackItem.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
