import React from "react";
import superagent from 'superagent';

const Meetup = props => {
  return (
    <ul>
      {props.meetups.map((meeting, idx) => (
        <li key={idx}>The meeting for {meeting.name} is: {meeting.name}</li>
      ))}
    </ul>
  );
}


export default Meetup;