import React from "react";


const Trails = props => {
  return (
    <ul>
      {props.trails.map((path, idx) => (
        <li key={idx}>Hike name: <a href={path.trail_url}>{path.name}</a>, is: {path.name} Location: {path.location} Distance: {path.length} miles</li>
      ))}
    </ul>
  );
}


export default Trails;