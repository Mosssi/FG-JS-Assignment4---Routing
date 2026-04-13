import { Link } from 'react-router-dom';

export default function Regions(){
  const regions =[
    'Europe',
    'Asia',
    'Afica',
    'Americas',
    'Oceania'
  ];

  return(
    <div>
      <h1>World Regions</h1>
      <ul>
        {regions.map(region => (
          <li key={region}>
            <Link to={`/regions/${region.toLowerCase()}`}>{region}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}