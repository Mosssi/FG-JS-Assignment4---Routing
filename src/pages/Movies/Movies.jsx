import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Movies.module.css';

export default function Movies() {
  const [movies,setMovies ] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
   fetch('https://api.tvmaze.com/shows')
    .then(res => {
      if(!res.ok){
        throw new Error('API server is currently down (502 Bad gateway).')
      }
      return res.json()
    })
    .then(data => {
      setMovies(data);
      setLoading(false);
    })

    .catch(err => {
      console.error("Fetch error:",err);
      setError("Sorry,the movie databasse server is currently down. Please try again later.");
      setLoading(false);
    })
  },[]);
  if(error) return <p className={styles.loading}>❌ {error} </p>

  if(loading)return <p className={styles.loading}>Loading amazing movies...🍿</p>

  return(
    <div>
      <h1 className={styles.title}>Top Rated Movies</h1>
      <div className={styles.grid}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}