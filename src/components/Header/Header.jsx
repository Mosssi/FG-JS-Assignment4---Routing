import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        🎬 Popcorn Cinema
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => isActive ? styles.active : ''}>Movies</NavLink>
        <NavLink to="/genres" className={({ isActive }) => isActive ? styles.active : ''}>Genres</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
      </nav>
    </header>
  )
}