import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
       const newVisitedFlags = [...visitedFlags, flag]
       setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            {/* visited countries  */}
            <div>
               <h4>Visited Countries: {visitedCountries.length}</h4> 
               <ul>
                {
                    visitedCountries.map(country => <p className="Text" key={country.cca3}>{country.name.common}</p>)
                }
               </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display All country */}
            <div className="Country-Container">
            {
                countries.map(country => <Country 
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                key={country.cca3}
                country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;