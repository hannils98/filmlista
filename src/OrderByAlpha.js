import React from 'react';
import {orderBy} from 'lodash';

export default function OrderByAlpha(props) {
    
    function sort(){
        props.setMovies(orderBy(props.movies, "title", 'asc'));
    }
    return (
        <button type="button" class="btn btn-primary" onClick={sort}>Bokstavsordning</button>
    )
}

