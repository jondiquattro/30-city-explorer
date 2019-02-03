import React from "react";
import superagent from "superagent";

const Map = (props) => {
  return  <p>Hello Maps! {props.lat} {props.long}</p>;
}

export default Map;


  /*
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat}%2c%20${props.long}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`;
  let data = await superagent.get(url);
  console.log('from mapcall', props.lat);
  */