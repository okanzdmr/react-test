import React from "react";

import { imageBase, genres } from "../../constants";
const MovieDetails = ({ movie }) => {
  return (
    <div>
      {movie.release_date}
      {movie.backdrop_path && (
        <img
          className="img-fluid"
          src={`${imageBase}${movie.backdrop_path}`}
          alt={movie.title}
        />
      )}
      <p className="font-weight-bold">{movie.overview}</p>
      {movie.genre_ids.lenght !== 0 && (
        <ul className="list-unstyled" data-testid="genres">
          {movie.genre_ids.map(id => (
            <li key={id}>{genres[id]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieDetails;
