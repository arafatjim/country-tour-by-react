import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
          const {name,flags,population,area,capital,cca3}=country;
          const [Visited, setVisited] = useState(false);
          const handleVisited = () =>{
                    setVisited(!Visited);
          }
          return (
                    <div className='country'>
                       <h3>Name: {name?.common} </h3>       
                       <img src={flags.png}/>
                       <p>Population: {population}</p>
                       <p>Area: {area}</p>
                       <p>Capital: {capital}</p>
                       <p>Code: {cca3}</p>
                       <button className='countryBtn' onClick={handleVisited}>Visited</button>
                       {
                              Visited?'I have visited this country.' : 'I want to visit'
                       }
                       
                       
                       
                    
                    </div>
          );
};

export default Country;