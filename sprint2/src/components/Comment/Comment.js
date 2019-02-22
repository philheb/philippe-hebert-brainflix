import React from 'react'
import './Comment.scss'

const comment = props => (
  <div className="Comment">
    <div className="comment">
      <div className="comments__avatar--new" />
      <div className="comment__body">
        <div className="comment__header">
          <h2 className="comment__author">{props.name}</h2>
          <h4 className="comment__date">{props.date}</h4>
        </div>
        <h4>{props.comment}</h4>
        <div className="icon-right">
          <i className="fas fa-trash-alt" />
        </div>
      </div>
    </div>
    <hr />
  </div>
)

export default comment
