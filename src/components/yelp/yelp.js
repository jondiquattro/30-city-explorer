import React from "react";

const Yelp = props => {
  return (
    <ul>
 
      {props.yelp.map((place, idx) => (
        <li key={idx}>The place for {place.name} is: {place.name}</li>
        
      ))}
   

    </ul>
  );
}


export default Yelp;

