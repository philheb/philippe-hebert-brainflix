import React from 'react'
import './Description.scss'

const description = () => (
  <div className="Description">
    <h1>BMX Rampage: 2018 Highlights</h1>
    <div className="description__sub">
      <div className="row">
        <h2>By Red Cow</h2>
        <h5>12/18/2018</h5>
      </div>
      <div className="row">
        <img
          src={require('../../assets/icons/Icon-views.svg')}
          alt="views"
          className="icon"
        />
        <h4>1,001,023</h4>
        <img
          src={require('../../assets/icons/Icon-likes.svg')}
          alt="views"
          className="icon"
        />
        <h4>110,985</h4>
      </div>
    </div>
    <hr />
    <h4 className="description__content">
      On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew
      the doors off what is possible on two wheels, unleashing some of the
      biggest moments the sport has ever seen. While mother nature only allowed
      for one full run before the conditions made it impossible to ride, that
      was all that was needed for event veteran Kyle Strait, who won the event
      for the second time -- eight years after his first Red Cow Rampage title.
    </h4>
  </div>
)

export default description
