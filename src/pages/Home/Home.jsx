
import { featuresData } from '../../data/featuresData';
import styles from './Home.module.css';

export default function Home (){
  return(
    <div className={styles.home}>
      <h1>Welcome to Popcorn Cinema 🎬</h1>
      <p>Discover your next favorite movie with us.</p>

      <div className={styles.features}>
        {featuresData.map(feature => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}