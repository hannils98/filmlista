import React, { useRef} from 'react';

export default function MovieForm(props) {
    
    const title = useRef();
    const rating = useRef();

    function addMovie(e){
        e.preventDefault();
        props.addMovie({title: title.current.value, rating: rating.current.value})
        document.getElementById("movie-form").reset();
    }

    return(
        <form onSubmit={addMovie} className="add-movie" id="movie-form">
          <fieldset>
            <legend>Lägg till en film</legend>
  
            <label for="title">Title:</label>
            <input type="text" id="title" className="form-control" ref={title}></input>
            <label for="rating">Betyg:</label>
  
            <select type="text" id="rating" className="form-control" ref={rating}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
  
            <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>
          </fieldset>
        </form>
    )
}
