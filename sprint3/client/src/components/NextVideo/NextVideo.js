import React from 'react'
import './NextVideo.scss'
import { Link } from 'react-router-dom'

const nextVideo = props => (
  <div className="NextVideo">
    <Link to={'/videos/' + props.id}>
      <div
        className="nextVideo__video"
        style={{
          backgroundImage: 'url(' + props.image + ')',
          backgroundSize: 'cover',
        }}
        onClick={props.clicked}
      />
    </Link>

    <div className="nextVideo__text">
      <h2 className="nextVideo__title">{props.title}</h2>
      <h4 className="nextVideo__author">{props.channel}</h4>
    </div>
  </div>
)
export default nextVideo
