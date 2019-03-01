import React from 'react'
import './Description.scss'

const Description = props => {
  const newDate = new Date(props.date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()
  const date = `${day}/${month}/${year}`

  return (
    <div className="Description">
      <h1>{props.title}</h1>
      <div className="description__sub">
        <div className="row">
          <h2>By {props.channel}</h2>
          <h5>{date}</h5>
        </div>
        <div className="row">
          <i className="material-icons view">remove_red_eye</i>
          <h4>{props.views}</h4>

          <i
            className="material-icons like"
            onClick={() => props.handleLikes(props.videoId)}
          >
            favorite
          </i>
          <h4>{props.likes}</h4>
        </div>
      </div>
      <hr />
      <h4 className="description__content">{props.description}</h4>
    </div>
  )
}

export default Description
