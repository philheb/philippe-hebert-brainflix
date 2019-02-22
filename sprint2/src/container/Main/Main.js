import React, { Component } from 'react'
import Video from '../../components/Video/Video'
import Description from '../../components/Description/Description'
import CommentForm from '../../components/CommentForm/CommentForm'
import Comments from '../../components/Comments/Comments'
import NextVideos from '../../components/NextVideos/NextVideos'
import Loader from '../../components/Loader/Loader'

import axios from 'axios'

class Main extends Component {
  state = {
    loadedVideoId: '1af0jruup5gu',
    loadedVideo: null,
    isLoaded: false,
    reloadVideo: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // '/videos/:id'
    if (id !== undefined) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=philippe`
        )
        .then(res => {
          this.setState({
            loadedVideo: res.data,
            isLoaded: true,
          })
        })
        .catch(err => {
          console.log(err)
        })
      // root '/'
    } else {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${
            this.state.loadedVideoId
          }?api_key=philippe`
        )
        .then(res => {
          this.setState({
            loadedVideo: res.data,
            isLoaded: true,
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  handleNextVideo = id => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=philippe`)
      .then(res => {
        this.setState({
          loadedVideo: res.data,
          isLoaded: true,
          reloadVideo: true,
        })
        window.scrollTo(0, 0)
        this.setState({ reloadVideo: false })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleNewComment = comment => {
    const newComment = {
      comment: comment,
      name: 'John Smith',
    }
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${
          this.state.loadedVideo.id
        }/comments?api_key=philippe`,
        newComment
      )
      .then(res => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${
              this.state.loadedVideo.id
            }?api_key=philippe`
          )
          .then(res => {
            this.setState({
              loadedVideo: res.data,
              isLoaded: true,
            })
            console.log(this.state.loadedVideo)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <>
          <Loader />
        </>
      )
    } else {
      return (
        <div className="Main">
          <Video
            video={this.state.loadedVideo.video + '?api_key=philippe'}
            image={this.state.loadedVideo.image}
            reload={this.state.reloadVideo}
          />
          <div className="bottom">
            <div className="bottom__left">
              <Description
                title={this.state.loadedVideo.title}
                channel={this.state.loadedVideo.channel}
                views={this.state.loadedVideo.views}
                likes={this.state.loadedVideo.likes}
                description={this.state.loadedVideo.description}
              />
              <CommentForm
                numComments={this.state.loadedVideo.comments.length}
                videoId={this.state.loadedVideo.id}
                handleNewComment={this.handleNewComment}
              />
              <Comments
                comments={this.state.loadedVideo.comments}
                videoId={this.state.loadedVideo.id}
              />
            </div>
            <div className="bottom__right">
              <NextVideos
                loadedVideo={this.state.loadedVideo}
                change={this.handleNextVideo}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Main
