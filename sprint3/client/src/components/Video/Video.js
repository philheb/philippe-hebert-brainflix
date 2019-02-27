import React, { Component } from 'react'
import './Video.scss'

export default class Video extends Component {
  state = {
    playing: false,
    icon: 'play_arrow',
    percentage: 0,
    currTime: '0:00',
  }

  componentDidMount() {
    this.setState({ icon: 'play_arrow' })
  }

  handleToggle = () => {
    if (this.state.playing === false) {
      this.myVideo.play()
      this.setState({
        playing: true,
        icon: 'pause',
      })
    } else {
      this.myVideo.pause()
      this.setState({
        playing: false,
        icon: 'play_arrow',
      })
    }
  }

  handleFullScreen = () => {
    this.myVideo.requestFullscreen()
  }

  handleTimeUpdate = event => {
    const newPercentage = Math.floor(
      (100 / event.target.duration) * event.target.currentTime
    )
    this.setState({ percentage: newPercentage })

    const seconds = Math.ceil(newPercentage / 10)

    if (seconds < 10) {
      this.setState({ currTime: '0:0' + seconds })
    } else {
      this.setState({ currTime: '0:' + seconds })
    }
  }

  render() {
    if (this.props.reload) {
      this.myVideo.pause()
      this.myVideo.load()
      // eslint-disable-next-line
      this.state.icon = 'play_arrow'
      // eslint-disable-next-line
      this.state.playing = false
    }

    const progressBarStyle = {
      width: this.state.percentage + '%',
    }

    const backgroundStyle = {
      backgroundSize: 'cover',
      backgroundImage: `url(${this.props.image})`,
    }

    return (
      <div className="Video">
        <video
          ref={self => (this.myVideo = self)}
          src={this.props.video + '?api_key=philippe'}
          style={backgroundStyle}
          poster={require('../../assets/images/transparent.png')}
          height="100%"
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div className="control">
          <div className="control__left" onClick={this.handleToggle}>
            <i className="material-icons">{this.state.icon}</i>
          </div>
          <div className="control__center">
            <div className="progress">
              <div className="bar-border">
                <div id="bar" className="bar-bar" style={progressBarStyle} />
                <div className="bar-ball">{}</div>
              </div>
              <div className="time">
                <p>{`${this.state.currTime}/0:10`}</p>{' '}
                {/* The video coming from the API is always 10 sec */}
              </div>
            </div>
          </div>
          <div className="control__right">
            <i className="material-icons" onClick={this.handleFullScreen}>
              fullscreen
            </i>
            <i className="material-icons">volume_up</i>
          </div>
        </div>
      </div>
    )
  }
}
