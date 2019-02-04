import React from "react";

const Map = (props) => {
  return (
    <div className={props.className} id="map-container">
      <img id="map" src={"https://maps.googleapis.com/maps/api/staticmap?center="+props.location.latitude+"%2c%20"+ props.location.longitude +"&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk"} alt="Map of search query" />
      <h2 className="query-placeholder">Here are the results for {props.location.formatted_query}</h2>
    </div>
  )
}

export default Map;
