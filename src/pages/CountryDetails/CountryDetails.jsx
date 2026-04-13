import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export default function CountryDetails() {
  const{ code } = useParams();
  const navigate = useNavigate();
  const [country,setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)

    .then(res => res.json())
    .then(data => setCountry(data[0]));

  },[code]);

  if(!country) return <p> Loading details...</p>

  return(
    <div>
      <button onClick ={() => navigate(-1)}>Go back</button>
      <h1>{country.name.offical}</h1>
      <img 
      src={country.flags.svg}
      alt="Flag" />
      <p><strong>Population:</strong>{country.capital ? coutry.capital[0]:'N/A'} </p>
      <p><strong>Region:</strong>{country.region}</p>
    </div>
  )
}