import React from "react";
import superagent from 'superagent';

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