import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./FutureEvents.css"

const FutureEvents = () => {

const nav = useNavigate();

  return (
    <>
    <div className="eventsmain">
      <div className="eventheader" style={{fontFamily: 'Galada'}}>Upcoming Events</div>
      <div className="eventbtndiv">
        <button className='eventbtn' onClick={() => nav("/Events")}>Past Events</button>
        <button className='eventbtn' onClick={() => nav("/UpcomingEvents")}>Upcoming Events</button>
      </div>
      
    </div>
    </>
  )
}

export default FutureEvents
