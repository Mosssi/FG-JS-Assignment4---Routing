import styles from './About.module.css'

const About =() => {
  return(
    <div className={styles.about}>
      <div className={styles.container}>

        <div className={styles.group1}>
          <h2 className={styles.title}>About this Movie App</h2>
          <p className={styles.text}>
            This is a multi page movie browing apolication built with React. It uses the TMDB API to fetch real-time data, focusing on front-end routing,state management,and component architecture           
          </p>
          <h4 className={styles.subTitle}>Site Structure</h4>
           <p className={styles.text}>
            The site includes Home,Genres,Movies,adn Details pages, allowing users to easily discover and explore top-rated films.
           </p>
        </div>

        <div className={styles.group2}>
          <h2 className={styles.title}>Design Concept</h2>
          <p className={styles.text}>
           I aimed for a clean light and modern aesthetic. The minimalistic design with spacious white backgrounds ensures a comfortable browsing experience,keeping the interface intuitive and easy to read across all devices.
          </p>
        </div>

         <div className={styles.group3}>
            <h2 className={styles.title}> Tech Stack & Tools </h2>
            <p className={styles.text}>
              Libraries:React,React ROuter DOM<br />
              Data Source:TMDB API <br />
              Hooks:useState,useEffect,useParams,useNavigate<br />
              Styling:CSS Modules & Responsive Design
            </p>
          </div>
      </div>
    </div>
  )
}

export default  About;
