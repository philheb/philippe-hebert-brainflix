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
        likes={comment.likes}
        likeComment={() => props.likeComment(comment.id, props.videoId)}
        deleteComment={() => props.deleteComment(comment.id, props.videoId)}
      />
    )
  })

  return <div className="Comments">{comments}</div>
}

export default Comments
