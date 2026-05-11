import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to ="/" className={styles.logo} onClick={closeMenu}> 🎬 Popcorn Cinema</Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? "🍿" : '🍔'}
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <NavLink 
          to="/" 
          onClick={closeMenu} 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          Home
        </NavLink>

        <NavLink 
          to="/movies"
          onClick={closeMenu} 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          Movies
        </NavLink>
        
        <NavLink 
          to="/genres" 
          onClick={closeMenu} 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          Genres
        </NavLink>

        <NavLink 
          to="/about"
          onClick={closeMenu} 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;