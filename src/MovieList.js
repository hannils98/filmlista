import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
    return (
        <ul id="movie-list" className= "list-group">
          {props.movie.map(movie => <Movie movie={movie} deleteMovie={props.deleteMovie}/>)}
        </ul>
    )
}
