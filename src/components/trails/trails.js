import React from "react";
import superagent from 'superagent';

const Trails = props => {
  return (
    <ul>
      {props.trails.map((path, idx) => (
        <li key={idx}>The place for {path.name} is: {path.name}</li>
      ))}
    </ul>
  );
}


export default Trails;