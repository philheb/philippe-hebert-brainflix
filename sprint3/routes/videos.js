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
router.post('/:videoId/comments', (req, res) => {
  const id = randomId(len, pattern)
  const videoId = req.params.videoId
  const { comment, channel } = req.body
  const video = require(`../data/${videoId}.json`)
  const newComment = {
    name: channel,
    comment: comment,
    id: id,
    likes: 0,
    timestamp: new Date().getTime(),
  }

  video.comments.push(newComment)
  fs.writeFileSync(
    `./data/${videoId}.json`,
    JSON.stringify(require(`../data/${videoId}.json`))
  )

  res.status(200).send(video)
})

// #Route   Delete /videos/:videoId/comments/:commentId
// #Desc    Delete a comment
router.delete('/:videoId/comments/:commentId', (req, res) => {
  const { commentId, videoId } = req.params
  const video = require(`../data/${videoId}.json`)
  const comments = video.comments
  const commentIds = comments.map(comment => comment.id)
  const commentIndex = commentIds.indexOf(commentId)

  comments.splice(commentIndex, 1)

  fs.writeFileSync(`./data/${videoId}.json`, JSON.stringify(video))

  res.json(video)
})

// #Route   PUT videos/:videoId/likes
// #Desc    Add a like
router.put('/:videoId/likes', (req, res) => {
  const videoId = req.params.videoId
  const video = require(`../data/${videoId}.json`)
  video.likes += 1
  fs.writeFileSync(
    `./data/${videoId}.json`,
    JSON.stringify(require(`../data/${videoId}.json`))
  )
  res.json(video)
})

// #Route   PUT videos/:videoId/:commentId/likes
// #Desc    Add a like to a comment
router.put('/:videoId/comments/:commentId/likes', (req, res) => {
  const { commentId, videoId } = req.params
  const video = require(`../data/${videoId}.json`)
  const comments = video.comments
  const commentIds = comments.map(comment => comment.id)
  const commentIndex = commentIds.indexOf(commentId)

  comments[commentIndex].likes += 1
  console.log(comments[commentIndex].likes)
  res.json(video)
})

module.exports = router
