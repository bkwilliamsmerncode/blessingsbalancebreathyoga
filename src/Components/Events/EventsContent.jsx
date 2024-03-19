import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Events.css"

const EventsContent = () => {

const nav = useNavigate();

  return (
    <>
    <div className="eventsmain">
      <div className="eventheader">Past Events</div>
      <div className="eventbtndiv">
        <button className='eventbtn' onClick={() => nav("/Events")}>Past Events</button>
        <button className='eventbtn' onClick={() => nav("/UpcomingEvents")}>Upcoming Events</button>
      </div>
      <div className="event1">YFEW Alicia event - March 2024</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">YFEW Stephanie Love event - February 2024</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">YFEW Arouet Christmas/Holiday - December 2023</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">YFEW Lights Camera Discover - October 2023</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">Maricopa Library & Cultural Center - August 2023</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">YFEW Santosha - July 2023</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">Boys & Girls Club of Flagstaff - December 2022</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">Presentations at Conferences - 2021 - 2024</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
      <div className="event1">Christian Yoga Classes - Christmas and Spring - Mountain Park Church - 2019 - 2022</div>
      <div className="eventphotosdiv">
<div className="eventphoto"></div>
<div className="eventphoto"></div>
<div className="eventphoto"></div>
      </div>
    </div>
    </>
  )
}

export default EventsContent
