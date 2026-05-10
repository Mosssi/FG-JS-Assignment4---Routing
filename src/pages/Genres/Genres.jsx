import { useState, useEffect } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';
import styles from './Genres.module.css';

const Genres = () => {
  const { id } = useParams();
  const [ genres, setGenres ]= useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const URL=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

  const fetchGenres = async () => {
    try{
      const response = await fetch(URL);
      const genresData = await response.json();
      setGenres(genresData.genres)
    }catch (error){
      console.log(error)
    }
  };

  useEffect(() => {
    fetchGenres();
  },[])

  if(!genres)return null;

  return(
    <>
    <div className={styles.category}>
      <h2 className={styles.pageTitle}>Explore Genres</h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <NavLink to ={`/genres/${genre.id}`} key={genre.id} className={styles.genre}>
            <p className={styles.name}>{genre.name}</p>
          </NavLink>
        ))}        
      </div>
      <div>
         <Outlet />

      </div>
      
    </div>
   
    </>
  )
}

export default Genres;
