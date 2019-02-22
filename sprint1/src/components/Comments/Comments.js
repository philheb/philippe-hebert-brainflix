import React, { Component } from 'react'
import './Comments.scss'
import Comment from '../Comment/Comment'

class Comments extends Component {
  state = {
    comments: [
      {
        id: 1,
        name: 'Micheal Lyons',
        comment:
          'They BLEW the ROOF off at the last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        date: '12/18/2018',
      },
      {
        id: 2,
        name: 'Gary Wong',
        comment:
          'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        date: '12/12/2018',
      },
      {
        id: 3,
        name: 'Theodore Duncan',
        comment:
          'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
        date: '11/15/2018',
      },
    ],
  }

  render() {
    let comments = this.state.comments.map(comment => {
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
}

export default Comments
