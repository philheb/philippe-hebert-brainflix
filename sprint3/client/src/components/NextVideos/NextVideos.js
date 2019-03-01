import React from 'react'
import './NextVideos.scss'
import NextVideo from '../NextVideo/NextVideo'

const NextVideos = props => {
  let nextVideos = props.thumbnails
    .filter(video => video.id !== props.loadedVideo.id)
    .map(nextVideo => {
      return (
        <NextVideo
          key={nextVideo.id}
          id={nextVideo.id}
          channel={nextVideo.channel}
          title={nextVideo.title}
          image={nextVideo.image}
          clicked={() => props.change(nextVideo.id)}
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

export default NextVideos
