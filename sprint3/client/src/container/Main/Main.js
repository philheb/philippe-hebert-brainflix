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
    if (id !== undefined) {
      axios
        .get(`http://localhost:5050/videos/${id}`)
        .then(res => {
          this.setState({
            loadedVideo: res.data,
            isLoaded: true,
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      axios
        .get(`http://localhost:5050/videos/${this.state.loadedVideoId}`)
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
      .get(`http://localhost:5050/videos/${id}`)
      .then(res => {
        this.setState({
          loadedVideo: res.data,
          isLoaded: true,
          reloadVideo: true,
        })
      })
      .then(res => {
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
        `http://localhost:5050/videos/${this.state.loadedVideo.id}/comments`,
        newComment
      )
      .then(res => {
        axios
          .get(`http://localhost:5050/videos/${this.state.loadedVideo.id}`)
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

  handleLikes = id => {
    axios.put(`http://localhost:5050/videos/${id}/likes`, id).then(res => {
      this.setState({
        loadedVideo: res.data,
      })
    })
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
            video={this.state.loadedVideo.video}
            image={this.state.loadedVideo.image}
            reload={this.state.reloadVideo}
          />
          <div className="bottom">
            <div className="bottom__left">
              <Description
                videoId={this.state.loadedVideo.id}
                title={this.state.loadedVideo.title}
                channel={this.state.loadedVideo.channel}
                date={this.state.loadedVideo.timestamp}
                views={this.state.loadedVideo.views}
                likes={this.state.loadedVideo.likes}
                description={this.state.loadedVideo.description}
                handleLikes={this.handleLikes}
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
