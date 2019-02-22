import React, { Component } from 'react'
import './NextVideos.scss'
import NextVideo from '../NextVideo/NextVideo'

class NextVideos extends Component {
  render() {
    // This will come from the API in SPRINT 2 ----------------------
    const videos = [
      {
        id: 1,
        author: 'Bernice Lambert',
        title: 'Become A Travel Pro In One Easy Lesson',
        thumbnail: require('../../assets/images/video-list-1.jpg'),
      },
      {
        id: 2,
        author: 'Bernard Patrick',
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-2.jpg'),
      },
      {
        id: 3,
        author: 'Lizzie Burton',
        title: 'Travel Health Useful Medical Information For',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-3.jpg'),
      },
      {
        id: 4,
        author: 'Emily Harper',
        title: 'Cheap Airline Tickets Great Ways To Save',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-4.jpg'),
      },
      {
        id: 5,
        author: 'Ethan Owen',
        title: 'Take A Romantic Break In A Boutique Hotel',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-5.jpg'),
      },
      {
        id: 6,
        author: 'Lydia Perez',
        title: 'Choose The Perfect Accommodations',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-6.jpg'),
      },
      {
        id: 7,
        author: 'Timothy Austin',
        title: 'Cruising Destination Ideas',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-7.jpg'),
      },
      {
        id: 8,
        author: 'Scotty Cranmer',
        title: 'Train Travel On Track For Safety',
        thumbnail: require('/Users/tom/Desktop/project/brainflix-1/src/assets/images/video-list-8.jpg'),
      },
    ]

    let nextVideos = videos.map(nextVideo => {
      return (
        <NextVideo
          key={nextVideo.id}
          author={nextVideo.author}
          title={nextVideo.title}
          // title2={nextVideo.title.replace(/(.{35})..+/, '$1…')}
          thumbnail={nextVideo.thumbnail}
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

export default NextVideos
