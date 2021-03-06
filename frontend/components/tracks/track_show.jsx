import React from 'react';
import { Link } from 'react-router';
import CommentFormContainer from '../comments/comment_form_container';
import CommentListContainer from '../comments/comment_list_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.stopPropagation();
    const showTrack = this.props.tracks[this.props.trackId];
    if (showTrack.id === this.props.currentTrack.id) {
      this.props.playing ? this.props.pauseTrack() : this.props.playTrack(this.props.tracks[this.props.trackId]);
    } else {
      this.props.pauseTrack();
      this.props.playTrack(showTrack);
    }
  }

  render() {
    let track, trackName, trackUsername, trackArtworkUrl, uploaderUrl, commenter,
      commenterPhoto;
    if (this.props.tracks) {
      track = this.props.tracks[this.props.trackId];
      trackName = track.name;
      trackUsername = track.user.username;
      trackArtworkUrl = track.artwork_url ? track.artwork_url : "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484354963/headphones_vw9muh.jpg";
      uploaderUrl = `/users/${track.user.id}`;
      commenter = this.props.currentUser;
      commenterPhoto = commenter ? commenter.profile_photo_url : "";
      // if (!commenterPhoto || commenterPhoto === "") {
      //   commenterPhoto = "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
      // }
      commenterPhoto = commenterPhoto || "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
    }
    let playPauseIcon;
    if (this.props.playing) {
      playPauseIcon = this.props.tracks[this.props.trackId].name === this.props.currentTrack.name ? "fa fa-pause-circle stack-3x" : "fa fa-play-circle stack-3x"
    } else {
      playPauseIcon = "fa fa-play-circle stack-3x";
    }
    return (
      <div className="track-show-container">
        <div className="track-show-header">
          <div className="track-show-details">
            <button className="play-button" onClick={this.togglePlay}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-square fa-stack-2x square-background"></i>
                <i className={playPauseIcon}></i>
              </span>
            </button>
            <div className="text-details">
              <Link to={uploaderUrl}>
                <div className="username">{trackUsername}</div>
              </Link>
              <div className="track-name">{trackName}</div>
            </div>
            <img className="track-show-artwork" src={trackArtworkUrl} />
          </div>
        </div>
        <div className="comment-section">
          <div className="form-and-photo">
            <img src={commenterPhoto} className="commenter-photo" />
            <CommentFormContainer trackId={this.props.trackId}/>
          </div>
          <div className="horizontal-line"></div>
          <h4>Comments</h4>
          <CommentListContainer track={track}/>
        </div>
      </div>
    );
  }
}

export default TrackShow;
