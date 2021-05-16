import React from 'react';
import {orderBy} from 'lodash';

export default function OrderByRating(props) {
    
    function sort(){
        props.setMovies(orderBy(props.movies, "rating", 'desc'));
    }
    return (
        <button type="button" class="btn btn-primary" onClick={sort}>Betygsordning</button>
    )
}
