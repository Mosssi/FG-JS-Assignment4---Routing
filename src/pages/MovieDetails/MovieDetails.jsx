import{ useState,useEffect } from 'react';
import{ useParams,useNavigate } from 'react-router-dom';
import styles from './MovieDetails.module.css';


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

    useEffect(()=> {
      const fetchMovie = async () => {
        try{
          const response = await fetch(URL);
          if (!response.ok){
            throw new Error('failed')
          }
          const data = await response.json();
          setMovie(data);
        } catch(error){
          console.log(error);
        }
      };
      fetchMovie()
  }, [id]);

  if(!movie) return <p className={styles.loading}>Loading movie details...🎬</p>

  return(
    <div className={styles.detailsContainer}>
      
      <div className={styles.content}>
        <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title} 
        className={styles.poster} />

        <div className={styles.info}>
          <h1>{movie.title}</h1>
          <p><strong>Rating:</strong> 🌟 {movie.vote_average} </p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime: </strong> ⏳{movie.runtime} minutes </p>

          <h3 className={styles.overviewTitle}> Overview</h3>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
      
      <button onClick ={() => navigate(-1)} className={styles.backBtn}> Go Back</button>

    </div>
  )
}

export default MovieDetails;
