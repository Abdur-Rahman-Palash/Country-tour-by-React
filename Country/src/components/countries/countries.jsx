import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = () => {
    const[countries,setCountries] =useState([]);
    const[visitedCountries, setViaitedCountries] =useState([]);
    const[visitedFlags,setVisitedFlags] =useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountry = country =>{
console.log('path onek baki');
const newVisitedCountry = [...visitedCountries, country]
setViaitedCountries(newVisitedCountry)
    }
    const handleVisitedFlag= flag=>{
const newVisitedFlags = [...visitedFlags, flag];
setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
          <h3>Rest Countries: {countries.length}</h3>
          <div>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ul>
{visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)}
            </ul>
            </div> 
            <div className="flag">
                <h3>Add Flag:</h3>
                {
                  visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)  
                }
            </div>
          <div className="country-container">
          {
            countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry } handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
          }
            </div> 
         
        </div>
    );
};

export default Countries;