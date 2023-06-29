//we have used swapi 
import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([])
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)

 const fetchMovieHandler = useCallback(async () => {
  setLoading(true)
  setError(null)
  try{
    const response= await fetch('https://swapi.dev/api/films/')
    
    if(!response.ok){
      throw new Error('something went wrong!');
    }
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
      
  }catch(error){
   setError(error.message); 
  }
  setLoading(false)
 }
)

 useEffect(()=>{
  fetchMovieHandler();
 },[])

 let content=<p><h3>Found no Movies</h3></p>

 if(movies.length > 0){
  content= <MoviesList movies={movies}/>
 }

 if(error){
  content=<p><h3>{error}</h3></p>
 }

 if(loading){
  content=<p><h3>Loading...</h3></p>
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!loading && movies.length>0 && <MoviesList movies={movies} />}
        {!loading && movies.length===0 && !error && <p><h3>Found no movies.</h3></p>}
        {!loading && error && <p><h3>{error}</h3></p>}
        {loading && <p><h3>loading...</h3></p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
