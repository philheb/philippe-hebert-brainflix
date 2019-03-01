import React from 'react'
import './Comments.scss'
import Comment from '../Comment/Comment'

const Comments = props => {
  let comments = props.comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        name={comment.name}
        comment={comment.comment}
        date={comment.date}
      />
    )
  })

  return <div className="Comments">{comments}</div>
}

export default Comments
