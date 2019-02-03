import React from "react";

const Weather = props => {
  return (
    <ul>
      {props.weather.map((forecast, idx) => (
        <li key={`weather-${idx}`}>The forecast for {forecast.time} is: {forecast.forecast}</li>
      ))}
    </ul>
  );
}


export default Weather;