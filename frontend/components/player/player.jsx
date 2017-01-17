import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      duration: 0,
      played: 0,
      playing: this.props.playing
    }
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);

  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress(state) {
    if (!this.state.seeking) {
      // this.setState(state)
    }
  }

  render() {
    const playPauseImage = this.props.playing ? "url(http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484553465/pause-button_f3qxvk.png)" :
            "url(http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484553465/play-button_rjs5uw.png)";
    const playPauseStyle = {
      backgroundImage: playPauseImage
    }

    return (
      <div className="playbar">
        <div className="play-controls">
          <button className="prev-button"></button>
          <button className="play-pause-button" style={playPauseStyle}></button>
          <button className="next-button"></button>
        </div>
        <progress max="1" value={this.state.played}></progress>
        <div className="react-player-container">
          <ReactPlayer ref={player => {this.player = player}}
            className='react-player'
            url={this.props.track.track_url}
            playing={this.props.playing}
            hidden={true}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
            onPlay={() => this.setState({ ["playing"]: true })}
            onPause={() => this.setState({ ["playing"]: false })}
            onEnded={() => this.setState({ ["playing"]: false })}
          />
          <input
            type='range' min={0} max={1} step='any'
            value={this.state.played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
        </div>
        <div className="current-track-details">
          <div>{this.props.track.name}</div>
          
        </div>
      </div>
    );
  }
}

export default Player;