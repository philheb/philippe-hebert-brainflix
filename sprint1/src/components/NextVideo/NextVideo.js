import React from 'react'
import './NextVideo.scss'

const nextVideo = props => (
  <div className="NextVideo">
    <div
      className="nextVideo__video"
      style={{
        backgroundImage: 'url(' + props.thumbnail + ')',
        backgroundSize: 'cover',
      }}
    />
    <div className="nextVideo__text">
      <h2 className="nextVideo__title">{props.title}</h2>
      <h4 className="nextVideo__author">{props.author}</h4>
    </div>
  </div>
)

export default nextVideo
