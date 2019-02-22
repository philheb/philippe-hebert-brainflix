import React, { Component } from 'react'
import './NextVideos.scss'
import NextVideo from '../NextVideo/NextVideo'
import Loader from '../Loader/Loader'
import axios from 'axios'

class NextVideos extends Component {
  state = {
    videos: null,
    isLoaded: false,
  }

  componentDidMount() {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=philippe`)
      .then(res => {
        this.setState({
          videos: res.data,
          isLoaded: true,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loader />
    } else {
      let nextVideos = this.state.videos
        .filter(video => video.id !== this.props.loadedVideo.id)
        .map(nextVideo => {
          return (
            <NextVideo
              key={nextVideo.id}
              id={nextVideo.id}
              channel={nextVideo.channel}
              title={nextVideo.title}
              image={nextVideo.image}
              clicked={() => this.props.change(nextVideo.id)}
            />
          )
        })

      return (
        <div className="NextVideos">
          <h5 className="nextVideos__title">NEXT VIDEO</h5>
          <div className="nextVideos__list">{nextVideos}</div>
        </div>
      )
    }
  }
}

export default NextVideos
