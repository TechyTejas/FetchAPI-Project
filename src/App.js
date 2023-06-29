//we have used swapi 
import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([])

 async function fetchMovieHandler() {
 const response= await fetch('https://swapi.dev/api/films/')
 const data= await response.json();
  
    //this step is to transformed upcoming data into that keyformat in which we alloted
    const trasformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date 
      };
    });
   setMovies(trasformedMovies);
  
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
