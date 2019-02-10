import React from "react";

const Yelp = props => {
  return (
    <ul>
 
      {props.yelp.map((place, idx) => (
        <li key={idx}>{place.name} The average rating is {place.rating} out of 5 and the average cost is {place.price} out of $$$$<img src={place.image_url}/> </li>
        
      ))}
   

    </ul>
  );
}


export default Yelp;

