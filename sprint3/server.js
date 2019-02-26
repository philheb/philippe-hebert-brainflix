const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5050
const videos = require('./routes/api/videos')

app.use(bodyParser.json())
app.use(cors())
app.use('/api/videos', videos)

app.listen(port, () => console.log(`Server is listening on port ${port}`))
