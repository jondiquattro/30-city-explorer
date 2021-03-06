import React from "react";


const Meetup = props => {
  return (
    <ul>
      {props.meetups.map((meeting, idx) => (
        <li key={idx}>{meeting.name} hosted by: {meeting.host} Created on: {meeting.creation_date}</li>
      ))}
    </ul>
  );
}


export default Meetup;