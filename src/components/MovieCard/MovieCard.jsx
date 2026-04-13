import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return(
    <div className={styles.card}>
      <img src={movie.image?.medium} alt={movie.name} className={styles.poster} />
        <div className={styles.info}>
          <h3>{movie.title}</h3>
          <p>Year:  🌟 {movie.rating ?.average || 'N/A'} </p>
          <Link to={`/movies/${movie.id}` } className={styles.btn}> View Details</Link>        
        </div>
    </div>
  )
}