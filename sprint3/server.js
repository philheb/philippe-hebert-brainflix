const express = require('express')
const app = express()
const videos = require('./routes/api/videos')

app.use('/api/videos', videos)

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server is listening on port ${port}`))
