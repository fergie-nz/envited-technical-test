import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Create = () => {

  const blankEventData = {
    eventName: 'Event name',
    hostName: 'Your name',
    startTime: 'Start time and date',
    endTime: 'End time and date',
    location: 'Location',
    photo: 'Photo'
  }

  const [eventData, setEventData] = useState(blankEventData)

  const changeHandler = (e) => {
    switch (e.target.name) {
      case 'eventName': 
        setEventData({...eventData, eventName: e.target.value})
        break
      case 'hostName':
        setEventData({...eventData, hostName: e.target.value})
        break
      case 'startTime':
        setEventData({...eventData, startTime: e.target.value})
        break
      case 'endTime':
        setEventData({...eventData, endTime: e.target.value})
        break
      case 'location':
       setEventData({...eventData, location: e.target.value})
        break
      case 'photo':
        setEventData({...eventData, photo: e.target.value})
        break
      default:
        break
    }
  }

  return (
    <div className="create-page">
      <form className="create-form">
        <div >
          <input onChange={changeHandler} name="eventName" value={eventData.eventName}>
          </input>
        </div>
        <div>
          <input onChange={changeHandler}name="hostName" value={eventData.hostName}>
          </input>
        </div>
        <div>
        <input onChange={changeHandler}name="startTime" value={eventData.startTime}>
          </input>
        </div>
        <div>
        <input onChange={changeHandler}name="endTime" value={eventData.endTime}>
          </input>
        </div>
        <div>
        <input onChange={changeHandler}name="location" value={eventData.location}>
          </input>
        </div>
        <div>
        <input onChange={changeHandler}name="photo" value={eventData.photo}>
          </input>
        </div>
      </form>
      <Link to={{
        pathname: "/event",
        state: eventData}}>
        <button>
          Next
        </button>
      </Link>
    </div>
  )
}


export default Create