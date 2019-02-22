import React from 'react'
import './Video.scss'

const video = () => (
  <div className="Video">
    <div className="video" />
    <div className="control">
      <div className="control__left">
        <img
          src={require('../../assets/icons/Icon-play.svg')}
          alt="play"
          style={{ height: '20px' }}
        />
      </div>
      <div className="control__center">
        <div className="progress">
          <div className="bar">
            <hr className="progress__bar" />
          </div>
          <div className="time">
            <p>0:00/0:42</p>
          </div>
        </div>
      </div>
      <div className="control__right">
        <img
          src={require('../../assets/icons/Icon-fullscreen.svg')}
          alt="fullscreen"
          style={{ height: '20px' }}
        />
        <img
          src={require('../../assets/icons/Icon-volume.svg')}
          alt="volume"
          style={{ height: '20px' }}
        />
      </div>
    </div>
  </div>
)

export default video
