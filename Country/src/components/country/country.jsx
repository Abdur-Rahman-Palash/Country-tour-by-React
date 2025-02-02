import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry,handleVisitedFlag }) => {
   const{name, flags, population, area, cca3} = country;
   const [visited, setVisited] = useState(false);

   const handleVisited = ()=>{
    setVisited(!visited);
   }
//    const passParams =()=>{
//     handleVisitedCountry(country)
//    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
           <h3>Name: {name?.common}</h3> 
           <img src={flags.png} alt="" />
           <p>Population: {population}</p>
           <p>Area:{area}</p>
           <p><small>Code: {cca3}</small></p>
           <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
           <br />
           <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
           <br /> 
           <button onClick={handleVisited}> {visited ? 'visited' : 'Going'}</button>
           {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;