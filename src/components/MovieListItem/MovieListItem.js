import React from "react";
import LazyLoad from "react-lazyload";

import { posterBase } from "../../constants";
import noImage from "../../static/noImage.png";

const MovieListItem = ({ movie, onMovieSelect }) => {
  return (
    <div
      className={"col-md-4 shadow-sm"}
      style={{ cursor: "pointer" }}
      onClick={() => {
        onMovieSelect(movie);
      }}
    >
      <LazyLoad height={5}>
        <img
          className={"img-fluid "}
          src={
            movie.poster_path ? `${posterBase}${movie.poster_path}` : noImage
          }
          alt={movie.title}
        ></img>
      </LazyLoad>
      <p data-testid="title">
        {movie.title}
        {movie.title === movie.original_title
          ? ""
          : ` (${movie.original_title})`}
      </p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieListItem;
