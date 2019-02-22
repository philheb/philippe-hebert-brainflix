import React, { Component } from 'react'
import './Video.scss'

export default class Video extends Component {
  render() {
    const imageStyles = {
      background: `transparent url(${this.props.image}) no-repeat 0 0`,
      // backgroundImage: `url(${this.props.image})`,
      backgroundSize: 'cover',
    }

    const barStyle = {
      width: '50%',
    }

    if (this.props.reload) {
      this.myVideo.load()
    }

    return (
      <div className="Video">
        <video
          ref={self => (this.myVideo = self)}
          src={this.props.video}
          style={imageStyles}
          poster={require('../../assets/images/transparent.png')}
          height="100%"
          width="100%"
        />
        <div className="control">
          <div className="control__left">
            <i class="material-icons">play_arrow</i>
          </div>
          <div className="control__center">
            <div className="progress">
              <div className="bar-border">
                <div id="bar" className="bar-bar" style={barStyle} />
              </div>
              <div className="time">
                <p>0:00/0:42</p>
              </div>
            </div>
          </div>
          <div className="control__right">
            <i class="material-icons">fullscreen</i>
            <i class="material-icons">volume_up</i>
          </div>
        </div>
      </div>
    )
  }
}
