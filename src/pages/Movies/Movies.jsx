import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [best,setBest] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;


  const fetchBest = async () => {
    try {
      const response = await fetch(URL);
      const bestData = await response.json();
      const movies = bestData.results;

      const theBestMovies =movies.filter(movie => movie.vote_average >= 8.5)
      setBest(theBestMovies);

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
  fetchBest();
},[])

if(!best) return null;

return (
  <div className={styles.best}>
    <h2 className={styles.pageTitle}>Top Rated Masterpieces</h2>
    <div className={styles.container}>
      {best.map((movie) => (
        <NavLink to={`/movies/${movie.id}`} key={movie.id} className={styles.movie}>
    <div className={styles.img}>
      <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
      />
    </div>
    <p className={styles.title}>{movie.title}</p>
    <p className={styles.vote}>🌟{movie.vote_average}</p>
    </NavLink>
  ))}
    </div> 
  </div>
  )
}


export default Movies;




