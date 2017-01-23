import React from 'react';
import TracksIndexContainer from '../tracks/tracks_index_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.userTracks = this.userTracks.bind(this);
    this.isUserTrack = this.isUserTrack.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  isUserTrack(key) {
    return this.props.tracks[key].user_id === parseInt(this.props.userId);
  }

  userTracks() {
    let myTracks = [];
    if (this.props.tracks) {
      const keys = Object.keys(this.props.tracks).filter(this.isUserTrack);
      myTracks = keys.map((key) => (
        this.props.tracks[key]
      ))
    }
    return myTracks;
  }

  render() {
    let user, userName, pf_photo_url;
    if (this.props.users) {
      user = this.props.users[this.props.userId];
      userName = user.username;
      pf_photo_url = user.profile_photo_url ? user.profile_photo_url :
        "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
    }

    return (
      <div className="user-show-container">
        <div className="user-show-header">
          <div className="user-show-details">
            <div className="text-details">
              <div className="username">{userName}</div>
            </div>
            <img className="user-show-pf-photo" src={pf_photo_url} />
          </div>
        </div>
        <div className="user-tracks">
          <TracksIndexContainer tracks={this.userTracks()}/>
        </div>
      </div>
    );
  }
}

export default UserShow;
