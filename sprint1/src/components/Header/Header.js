import React from 'react'
import './Header.scss'

const header = () => (
  <div className="Header swing-in-top-fwd">
    <div className="logo">
      <a href="/">
        <img
          src={require('../../assets/logo/Logo-brainflix.svg')}
          alt="BrainFlix Logo"
        />
      </a>
    </div>
    <div className="Search">
      <input className="search__input" type="text" placeholder="      Search" />
    </div>

    <div className="upload__avatar">
      <a href="/" className="upload__btn">
        <img
          src={require('../../assets/icons/Icon-upload.svg')}
          alt="BrainFlix Logo"
        />
        UPLOAD
      </a>
      <div className="avatar" />
    </div>
  </div>
)

export default header
