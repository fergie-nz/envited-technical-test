import React from "react"

import eventImage from '../images/event/Cover\ photo.png'

const Event = (props) => {
  console.log(props)
  return (
    <div className="event-page">
      <div className="event-photo-box">
        <img id="event-photo" src={eventImage} alt="eventphoto"></img>
      </div>
      <div className="event-information">
        <div className="event-title heading heading-blue">
          {props.location.state.eventName}
        </div>
        <div className="event-sub-title">
          <p>
            Hosted by {props.location.state.hostName}
          </p>
        </div>
        <div className="image-bar">

        </div>
        <div className="envite-bar">

        </div>
        <div className="event-details">
          <div className="start-date">
            Start date: {props.location.state.startTime}
          </div>
          <div className="end-date">
            End date: {props.location.state.endTime}
          </div>
          <div className="event-location">
            Location: {props.location.state.location}
          </div>
        </div>
        <div className="event-options-nav">

        </div>
        <div className="description">

        </div>
      </div>
    </div>
  )
}



export default Event