import React from "react";


const Movies = props => {
  return (
    <ul>

      {props.movies.map((movie, idx) => (
        <li key={idx}><b>{movie.title}</b> was released on {movie.released_on} <br />Out of {movie.total_votes} votes {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity} <img src={movie.image_url} /></li>

      ))}


    </ul>
  );
}


export default Movies;