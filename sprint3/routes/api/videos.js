const express = require('express')
const router = express.Router()
const videos = require('../../data/videos.json')

// #Route   GET api/videos/test
// #Desc    Tests posts route
router.get('/test', (req, res) => {
  res.send('Bonjour à tous!')
})

// #Route   GET api/videos/
// #Desc    Get all videos (for thumbnail)
router.get('/', (req, res) => {
  res.send(videos)
})

// #Route   GET api/videos/:id
// #Desc    Get a specific video by id
router.get('/:id', (req, res) => {
  let id = req.params.id
  res.send(require(`../../data/${id}.json`))
})

module.exports = router
