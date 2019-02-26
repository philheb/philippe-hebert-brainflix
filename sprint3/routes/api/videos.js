const express = require('express')
const router = express.Router()
const randomId = require('random-id')
const fs = require('fs')
const videoList = require('../../data/videoList.json')

const len = 12
const pattern = 'a0'

// #Route   GET api/videos/test
// #Desc    Tests posts route
router.get('/test', (req, res) => {
  res.send('Bonjour à tous!')
})

// #Route   GET api/videos/
// #Desc    Get all videos (for thumbnail)
router.get('/', (req, res) => {
  res.send(videoList)
})

// #Route   GET api/videos/:id
// #Desc    Get a specific video by id
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.send(require(`../../data/${id}.json`))
})

// #Route   POST api/videos
// #Desc    Upload a new video
router.post('/', (req, res) => {
  const id = randomId(len, pattern)
  const image = 'https://source.unsplash.com/1280x720'
  const timestamp = new Date().getTime()

  const newVideoList = {
    id: id,
    title: req.body.title,
    channel: 'John Smith',
    image: image,
  }

  // const newVideo = {
  //   id: id,
  //   title: req.body.title,
  //   image: image,
  //   description: req.body.description,
  //   views: 0,
  //   likes: 0,
  //   duration: '1:23',
  //   video: 'https://project-2-api.herokuapp.com/stream?api_key=philippe',
  //   timestamp: timestamp,
  //   comment: [],
  // }

  videoList.push(newVideoList)
  fs.writeFileSync('./data/videoList.json', JSON.stringify(videoList))

  res.send(200).send({
    success: true,
    data: req.body,
  })
})

module.exports = router
