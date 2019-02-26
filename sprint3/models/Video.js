const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  likes: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  comments: [
    {
      name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      likes: {
        type: Number,
        required: true
      },
      timestamp: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Video = mongoose.model("video", VideoSchema);
