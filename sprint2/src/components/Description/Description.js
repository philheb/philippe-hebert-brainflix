import React from 'react'
import './Description.scss'

const description = props => (
  <div className="Description">
    <h1>{props.title}</h1>
    <div className="description__sub">
      <div className="row">
        <h2>By {props.channel}</h2>
        <h5>12/18/2018</h5>
      </div>
      <div className="row">
        {/* <img
          src={require('../../assets/icons/Icon-views.svg')}
          alt="views"
          className="icon"
        /> */}
        <i className="material-icons view">remove_red_eye</i>
        <h4>{props.views}</h4>

        <i className="material-icons like">favorite</i>
        <h4>{props.likes}</h4>
      </div>
    </div>
    <hr />
    <h4 className="description__content">{props.description}</h4>
  </div>
)

export default description
