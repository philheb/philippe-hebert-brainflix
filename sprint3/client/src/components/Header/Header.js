import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <div className="Header swing-in-top-fwd">
    <div className="logo">
      <Link className="navbar-brand" to="/">
        <img
          src={require('../../assets/logo/Logo-brainflix.svg')}
          alt="BrainFlix Logo"
        />
      </Link>
    </div>
    <div className="Search">
      <input className="search__input" type="text" placeholder="      Search" />
    </div>

    <div className="upload__avatar">
      <Link className="upload__btn" to="/upload">
        <img
          src={require('../../assets/icons/Icon-upload.svg')}
          alt="BrainFlix Logo"
        />
        UPLOAD
      </Link>
      <div className="avatar" />
    </div>
  </div>
)

export default Header
