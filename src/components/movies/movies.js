import React from "react";
import superagent from 'superagent';

const Movies = props => {
  return (
    <ul>
 
      {props.movies.map((movie, idx) => (
        <li key={idx}>The movies playing are {movie.title} is: {movie.title}</li>
        
      ))}
   

    </ul>
  );
}


export default Movies;