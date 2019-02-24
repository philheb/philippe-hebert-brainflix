import React, { Component } from 'react'
import './Video.scss'

export default class Video extends Component {
  state = {
    playing: false,
    icon: 'play_arrow',
  }

  componentDidMount() {
    this.setState({ icon: 'play_arrow' })
  }

  toggle = () => {
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
      width: '50%',
    }

    const backgroundStyle = {
      backgroundSize: 'cover',
      backgroundImage: `url(${this.props.image})`,
    }

    return (
      <div className="Video">
        <video
          ref={self => (this.myVideo = self)}
          src={this.props.video}
          style={backgroundStyle}
          poster={require('../../assets/images/transparent.png')}
          height="100%"
          // width="100%"
        />
        <div className="control">
          <div className="control__left" onClick={this.toggle}>
            <i className="material-icons">{this.state.icon}</i>
          </div>
          <div className="control__center">
            <div className="progress">
              <div className="bar-border">
                <div id="bar" className="bar-bar" style={progressBarStyle} />
              </div>
              <div className="time">
                <p>0:00/0:42</p>
              </div>
            </div>
          </div>
          <div className="control__right">
            <i className="material-icons">fullscreen</i>
            <i className="material-icons">volume_up</i>
          </div>
        </div>
      </div>
    )
  }
}
