import { useState ,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import styles from '../Countries/Countries.module.css';

export default function RegionDetail(){
  const { regionName } = useParams();
  const navigate = useNavigate();
  const [countries, setCountries ] = useState([]);
  const [ loading ,setLoading ] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${regionName}`)
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      setLoading(false);
    })
  },[regionName]);

  if(loading)return<p> Loading region data...</p>

  return(
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Countries in {regionName}</h1>
      <div className={styles.grid}>
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )

}