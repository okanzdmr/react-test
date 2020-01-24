import React from 'react';

import MovieListItem from '../MovieListItem'

const MovieList = (props) => {
    const movieItems = props.movies.map((movie) => {
        return (<MovieListItem
            onMovieSelect={props.onMovieSelect}
            key={movie.id}
            movie={movie} />
        );
    });
    return (
        <div className={"container"}>
            <div className='col-md-12 row '>
                {movieItems}
            </div>
        </div>
    );

};
export default MovieList;