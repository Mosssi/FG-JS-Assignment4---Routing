import { useState, useEffect } from 'react';
import { useParams,NavLink }from 'react-router-dom';
import styles from './GenreDetails.module.css';

const GenreDetails = () => {
  const { id } = useParams() 
    const [ movies, setMovies ] = useState(null);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`;

    useEffect(() => {
      const fetchMoviesByGenre = async () => {
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setMovies(data.results);
        }catch(error){
          console.log(error)
        }
      }
      fetchMoviesByGenre();
    },[id]);

    if (!movies) return <div className={styles.loading}>Loading</div>

    return(
      <div className={styles.container}>
        <div className={styles.grid}>
          {movies.map((movie) => (
            <NavLink to={`/movies/${movie.id}`} key={movie.id} className={styles.movie}>
              <div className={styles.img}>
                <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                 />
              </div>
              <p className={styles.title}>{movie.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    )
  };

export default GenreDetails
