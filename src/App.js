//we have used swapi 
import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([])
  const[loading,setLoading]=useState(false)

 async function fetchMovieHandler() {
  setLoading(true)
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
   setLoading(false)
  
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length>0 && <MoviesList movies={movies} />}
        {!loading && movies.length===0 && <p><h3>Found no movies.</h3></p>}
        {loading && <p><h3>loading...</h3></p>}
      </section>
    </React.Fragment>
  );
}

export default App;
