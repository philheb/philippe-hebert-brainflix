import React from 'react'
import './CommentForm.scss'

const commentForm = () => (
  <section className="comments">
    <h2 className="comments__header">3 Comments</h2>
    <div className="comments__body">
      <div className="comments__new">
        <div className="comments__avatar" />
        <div className="comments__inputs">
          <div className="comment__input">
            <h5 className="label">JOIN THE CONVERSATION</h5>
            <input
              className="input input__comment"
              name="comment"
              type="text"
              placeholder="Add a new comment"
            />
          </div>
          <a className="btn btn__comment" href="/">
            COMMENT
          </a>
        </div>
      </div>
      <hr />
    </div>
  </section>
)

export default commentForm
