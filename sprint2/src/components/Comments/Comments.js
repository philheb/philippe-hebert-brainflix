import React, { Component } from 'react'
import './Comments.scss'
import Comment from '../Comment/Comment'
import Loader from '../Loader/Loader'

class Comments extends Component {
  state = {
    comments: this.props.comments,
    currentVideo: this.props.videoId,
  }

  render() {
    let comments = this.props.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          date={comment.date}
        />
      )
    })
    if (this.state.isLoading) {
      return <Loader />
    }
    return <div className="Comments">{comments}</div>
  }
}

export default Comments
