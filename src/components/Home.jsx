import React from "react"
import {Link} from 'react-router-dom'

import navImage from '../images/landing/Nav\ Bar_landing\ page.png'
import createImage from '../images/landing/Create\ event\ button.png'

const Home = () => {

  return (
    <div className="landing-page">
      <div className="nav-bar">
          <img id="nav-image" src={navImage} alt="nav"></img>
      </div>
      <div>
        <div>
          <p className="heading">
            Facebook events without Facebook.
          </p>
        </div>
        <div>
          <p className="subheading">
           Easily host and share events with your friends across any social media.
          </p>
        </div>
      <Link to={`create`}>
        <div className="create-event">
          <img id="create-event-button" src={createImage} alt="create"></img>
        </div>
      </Link>
      </div>
      <div className="landing-images">

      </div>
    </div>
  )
}


export default Home