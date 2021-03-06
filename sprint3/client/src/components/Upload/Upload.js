import React, { Component } from 'react'
import axios from 'axios'
import './Upload.scss'
import { Link } from 'react-router-dom'

export default class Upload extends Component {
  state = {
    title: '',
    description: '',
  }

  handleSubmit = () => {
    const newVideo = {
      title: this.state.title,
      description: this.state.description,
    }
    axios.post(`http://localhost:5050/videos/`, newVideo)
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <hr className="light-hr" />
        <div className="Upload">
          <h1 className="upload__header">Upload Video</h1>
          <hr className="upload__hr" />

          <div className="upload__body">
            <div className="upload__body--left">
              <h5>VIDEO THUMBNAIL</h5>
              <img
                className="upload__thumbnail"
                src={require('../../assets/images/Upload-video-preview.jpg')}
                alt="bicycle"
              />
            </div>

            <div className="upload__body--right">
              <div className="upload__title">
                <h5>TITLE YOUR VIDEO</h5>
                <input
                  rows="4"
                  className="input upload__input upload__title--input"
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                  value={this.state.title}
                  onChange={event =>
                    this.setState({ title: event.target.value })
                  }
                />
              </div>
              <div className="upload__description">
                <h5>ADD A VIDEO DESCRIPTION</h5>
                <textarea
                  className="input upload__input upload__description--input"
                  type="text"
                  name="title"
                  placeholder="Add a description to your video"
                  height="143px"
                  value={this.state.description}
                  onChange={event =>
                    this.setState({ description: event.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <hr className="upload__hr" />
          <div className="actions">
            <button className="btn btn-publish" onClick={this.handleSubmit}>
              PUBLISH
            </button>
            <Link to="/">
              <button className="btn-cancel">CANCEL</button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
