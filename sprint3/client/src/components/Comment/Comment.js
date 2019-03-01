import React from 'react'
import './Comment.scss'

const Comment = props => {
  const newDate = new Date(props.date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()
  const date = `${day}/${month}/${year}`

  return (
    <div className="Comment">
      <div className="comment">
        <div className="comments__avatar--new" />
        <div className="comment__body">
          <div className="comment__header">
            <h2 className="comment__author">{props.name}</h2>
            <h4 className="comment__date">{date}</h4>
          </div>
          <h4 className="comment__comment">{props.comment}</h4>
          <div className="comment__icons">
            <div className="comment__icons-left" style={{ display: 'flex' }}>
              <i className="material-icons like" onClick={props.likeComment}>
                favorite
              </i>
              <h4>{props.likes}</h4>
            </div>
            <i className="material-icons trash" onClick={props.deleteComment}>
              delete
            </i>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Comment
