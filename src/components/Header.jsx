import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="top-row">
        <img src="/rainfocus.png" alt="rainfocus" className="logo" />
        <div className="header-info">
          <h1>RainFocus Summit</h1>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
        <div className="button-container">
          <button className="button">Edit event</button>
        </div>
      </div>
      <div className="bottom-row">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
      <div className="bottom-line"></div>
    </div>
  )
}

export default Header
