import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.openCloudinaryTrackWidget = this.openCloudinaryTrackWidget.bind(this);
    this.openCloudinaryArtworkWidget = this.oepnCloudinaryArtworkWidget.bind(this);
  }

  openCloudinaryTrackWidget() {

  }

  openCloudinaryArtworkWidget() {

  }

  uploadButtons() {
    return(
      <div>
        <button className='upload-form-button' onClick={this.openCloudinaryTrackWidget}
          >Upload Track</button>
        <br/>

        <button className='upload-form-button' onClick={this.openCloudinaryArtworkWidget}
          >Upload Artwork (Optional)</button>
        <br/>
      </div>
    );
  }

  render() {

  }
}
