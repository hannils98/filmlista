import React, {useState} from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import OrderByRating from './OrderByRating';
import OrderByAlpha from './OrderByAlpha';

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie){
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        if( movie.title !== "" && movie.rating !== "0"){
            setMovies([...movies, {
                id: newId,
                title: movie.title,
                rating: movie.rating
            }])
        } else if(movie.title === ""){
          alert("Du måste ange en titel.")
      } else{
          alert("Du måste ange ett betyg.")
      }
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
}

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <MovieForm addMovie={addMovie}/>
      <h2>Filmer</h2>
      <MovieList movie={movies} deleteMovie={deleteMovie}/>
      <OrderByRating movies={movies} setMovies={setMovies}/>
      <OrderByAlpha movies={movies} setMovies={setMovies}/>
    </div>
  );
}
export default App;
