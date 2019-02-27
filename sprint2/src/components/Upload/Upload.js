import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Upload.scss'

export default class Upload extends Component {
  render() {
    return (
      <>
        <hr className="light-hr" />
        <div className="Upload">
          <h1 className="upload__header">Upload Video</h1>
          <hr className="upload-hr" />

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
                />
              </div>
            </div>
          </div>

          <hr className="dark-hr" />

          <Link to="/" className="actions">
            <button className="btn btn-publish">PUBLISH</button>
            <button className="btn-cancel">CANCEL</button>
          </Link>
        </div>
      </>
    )
  }
}
