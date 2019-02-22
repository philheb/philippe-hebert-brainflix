import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import Description from './components/Description/Description'
import CommentForm from './components/CommentForm/CommentForm'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Video />
        <div className="bottom">
          <div className="bottom__left">
            <Description />
            <CommentForm />
            <Comments />
          </div>
          <div className="bottom__right">
            <NextVideos />
          </div>
        </div>
      </div>
    )
  }
}

export default App
