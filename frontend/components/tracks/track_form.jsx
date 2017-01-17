import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.track) {
      this.state = this.props.track;
      // may need change ^
    } else {
      this.state = { name: "", track_url: "", artwork_url: "",
        user_id: null };
    }

    this.openCloudinaryTrackWidget = this.openCloudinaryTrackWidget.bind(this);
    this.openCloudinaryArtworkWidget = this.openCloudinaryArtworkWidget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openCloudinaryTrackWidget(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        this.setState({track_url: results[0].url});
      } else {
        console.log(error);
      }
    });
  }

  openCloudinaryArtworkWidget(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        this.setState({artwork_url: results[0].url});
      } else {
        console.log(error);
      }
    });
  }

  uploadButtons() {
    return (
      <div className="upload-buttons-container">
        <div>
          <button className='upload-form-button track-field' onClick={this.openCloudinaryTrackWidget}
            >Upload Track</button>
          <br/>

          <button className='upload-form-button track-field' onClick={this.openCloudinaryArtworkWidget}
            >Upload Artwork (Optional)</button>
          <br/>
        </div>
      </div>
    );
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  navigateToHome() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.createTrack({track});
    // this.navigateToHome();
  }

  render() {
    const { name, track_url, artwork_url, user_id } = this.state;

    return (
      <div className="new-track-container">
        <div className="new-track-form">
          <h3 className="new-track-title track-field">Upload Track</h3>

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={name} placeholder="Title"
              onChange={this.update("name")} className="track-field new-track-name"/>

            {this.uploadButtons()}

            <div className="button-holder">
              <input type="submit" value="Upload" className="new-track-button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackForm);
