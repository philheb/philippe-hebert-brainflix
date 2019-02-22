import React, { Component } from 'react'
import './CommentForm.scss'

class CommentForm extends Component {
  state = {
    comment: '',
  }

  render() {
    return (
      <section className="comments">
        <h2 className="comments__header">{this.props.numComments} Comments</h2>
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
                  value={this.state.comment}
                  onChange={event =>
                    this.setState({ comment: event.target.value })
                  }
                />
              </div>
              <button
                className="btn btn__comment"
                onClick={() => this.props.handleNewComment(this.state.comment)}
                href="/"
              >
                COMMENT
              </button>
            </div>
          </div>
          <hr />
        </div>
      </section>
    )
  }
}

export default CommentForm
