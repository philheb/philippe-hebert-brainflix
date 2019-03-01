const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const videoRoute = require('./routes/videos')

app.use(bodyParser.json())
app.use(cors())
app.use('/videos', videoRoute)

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`Server is listening on port ${port}`))
