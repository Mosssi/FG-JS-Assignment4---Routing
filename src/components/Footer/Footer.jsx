import styles from './Footer.module.css';


export default function Footer(){
  return(
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Popcorn Cinema. Built for React Assignment. </p>

    </footer>
  )
}

