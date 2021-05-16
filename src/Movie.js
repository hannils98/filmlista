import React from 'react';

export default function Movie(props) {

    let stars = [];
    for (let i=0; i<props.movie.rating; i++){
        stars.push(<img src="images/star.png" alt="star"></img>)}
    
    return (
        <li className="list-group-item" data-grade={props.movie.rating} data-title={props.movie.title}> {props.movie.title}
            <img src="images/delete.png" alt="Delete movie" className="delete-movie" onClick={() => {props.deleteMovie(props.movie.id)}}></img> 
            {stars}
        </li>
    )
}



