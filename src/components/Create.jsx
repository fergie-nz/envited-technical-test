import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';


const Create = () => {

  const blankEventData = {
    eventName: 'Quidditch World Cup',
    hostName: 'Ludo Bagman',
    startTime: '10/6/1991',
    endTime: '11/7/1991',
    location: 'Somewhere in Northern Wales',
    photo: ''
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
      <Card variant="outlined" className="create-event-card">
      <form className="create-form">
        <div >
        <TextField className="textfield" id="outlined-basic" label="Event name" variant="outlined" onChange={changeHandler} name="eventName" value={eventData.eventName}/>
        </div>
        <div>
          <TextField className="textfield" id="outlined-basic" label="Your name" variant="outlined" onChange={changeHandler}name="hostName" value={eventData.hostName} />
        </div>
        <div>
          <TextField className="textfield" id="outlined-basic" label="Outlined" variant="outlined" onChange={changeHandler} name="startTime" value={eventData.startTime} />
        </div>
        <div>
         <TextField className="textfield" id="outlined-basic" label="Outlined" variant="outlined" onChange={changeHandler}name="endTime" value={eventData.endTime}/>
        </div>
        <div>
          <TextField className="textfield" id="outlined-basic" label="Outlined" variant="outlined" onChange={changeHandler}name="location" value={eventData.location}/>
        </div>
        <div>
          <TextField className="textfield" id="outlined-basic" label="Outlined" variant="outlined" onChange={changeHandler}name="photo" value={eventData.photo} />
        </div>
      </form>
      <Link to={{
        pathname: "/event",
        state: eventData}}>
        <button>
          Next
        </button>
      </Link>
      </Card>
    </div>
  )
}


export default Create