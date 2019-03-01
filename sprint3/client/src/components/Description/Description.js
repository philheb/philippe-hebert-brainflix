import React, { Component } from 'react'
import './Description.scss'

class Description extends Component {
  render() {
    const newDate = new Date(this.props.date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    const date = `${day}/${month}/${year}`

    return (
      <div className="Description">
        <h1>{this.props.title}</h1>
        <div className="description__sub">
          <div className="row">
            <h2>By {this.props.channel}</h2>
            <h5>{date}</h5>
          </div>
          <div className="row">
            <i className="material-icons view">remove_red_eye</i>
            <h4>{this.props.views}</h4>

            <i
              className="material-icons like"
              onClick={() => this.props.handleLikes(this.props.videoId)}
            >
              favorite
            </i>
            <h4>{this.props.likes}</h4>
          </div>
        </div>
        <hr />
        <h4 className="description__content">{this.props.description}</h4>
      </div>
    )
  }
}

export default Description
