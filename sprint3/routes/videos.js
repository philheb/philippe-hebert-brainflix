const express = require('express')
const router = express.Router()
const randomId = require('random-id')
const fs = require('fs')
const videoList = require('../data/videoList.json')

const len = 12
const pattern = 'a0'

// #Route   GET videos/
// #Desc    Get all videos (for thumbnail)
router.get('/', (req, res) => {
  res.send(videoList)
})

// #Route   GET videos/:id
// #Desc    Get a specific video by id
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.send(require(`../data/${id}.json`))
})

// #Route   POST videos/
// #Desc    Upload a new video
router.post('/', (req, res) => {
  const id = randomId(len, pattern)
  const image = 'https://i.imgur.com/z5R1zgx.jpg'
  const timestamp = new Date().getTime()

  const newVideoList = {
    id: id,
    title: req.body.title,
    channel: 'John Smith',
    image: image,
  }

  const newVideo = {
    id: id,
    title: req.body.title,
    channel: 'John Smith',
    image: image,
    description: req.body.description,
    views: '0',
    likes: '0',
    duration: '1:23',
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: timestamp,
    comments: [],
  }

  videoList.push(newVideoList)
  fs.writeFileSync('./data/videoList.json', JSON.stringify(videoList))

  fs.writeFile(`./data/${id}.json`, JSON.stringify(newVideo), err => {
    if (err) throw err
    console.log('The video has been saved!')
  })

  res.sendStatus(200).send({
    success: true,
    data: req.body,
  })
})

// #Route   POST /videos/:id/comments
// #Desc    Add a new comment
router.post('/:id/comments', (req, res) => {
  const id = randomId(len, pattern)
  const videoId = req.params.id
  const comment = req.body.comment
  const channel = req.body.name
  const video = require(`../data/${videoId}.json`)
  const newComment = {
    name: channel,
    comment: comment,
    id: id,
    likes: 0,
    timestamp: new Date().getTime(),
  }
  video.comments.push(newComment)
  res.status(200).send(video)
})

// #Route   PUT videos/:videoId/likes
// #Desc    Increments the like count
router.put('/:id/likes', (req, res) => {
  const id = req.params.id
  const video = require(`../data/${id}.json`)
  video.likes += 1
  fs.writeFileSync(
    `./data/${id}.json`,
    JSON.stringify(require(`../data/${id}.json`))
  )
  // res.send(require(`../data/${id}.json`).likes)
  res.json(video)
})

module.exports = router
