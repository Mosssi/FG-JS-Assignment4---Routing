import { useState, useEffect } from 'react';
import styles from './Countries.module.css';

export default function Countries() {
  const [countries, serCountries] = useState([]);
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    fetch('htps://restcountries.comv3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data.slice(0,24));
      setLoading(false)
    });
  },[])

  if(laoding)return <p>Loading countries data..</p>

  return(
    <div>
      <h1>All Countries</h1>
      <div className={styles.grid}>
        {countries.mao(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}


