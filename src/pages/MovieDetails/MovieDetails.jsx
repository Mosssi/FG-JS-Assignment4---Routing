import{ useState,useEffect } from 'react';
import{ useParams,useNavigate } from 'react-router-dom';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie,setMovie] = useState(null);
  const[error,setError] = useState(null);

  useEffect(()=> {
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(res => {
      if(!res.ok) throw new Error('API down');
      return res.json()
    })
    .then(data => setMovie(data))
    .catch(err => setError("Failed to load details."));
  }, [id]);

  if(error) return <p className={styles.loading}>❌{error}</p>
  if(!movie) return <p className={styles.loading}>Loading movie details...🎬</p>

  return(
    <div className={styles.detailsContainer}>
      <div className={styles.content}>
        <img src={movie.image?.original || movie.image?.medium} alt={movie.name} className={styles.poster} />

        <div className={styles.info}>
          <h1>{movie.name}</h1>
          <p><strong>🌟Rating</strong>{movie.rating ?. average || 'No rating'} </p>
          <p><strong>⏳Runtime</strong>{movie.runtime} minutes</p>
          <p><strong>🏵️ Genres </strong>{movie.genres?.join(', ')} </p>
          <p className={styles.summary}>
             {movie.summary ? movie.summary.replace(/<[^>]*>?/gm, ''): 'No summary available.'}
          </p>

          
        </div>
      </div>
<button onClick ={() => navigate(-1)} className={styles.backBtn}>&larr; Go Back</button>

    </div>
  )
}