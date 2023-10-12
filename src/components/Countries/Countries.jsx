import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
               <h4>Visited Countries: {visitedCountries.length}</h4> 
               <ul>
                {
                    visitedCountries.map(country => <p className="Text" key={country.cca3}>{country.name.common}</p>)
                }
               </ul>
            </div>
            <div className="Country-Container">
            {
                countries.map(country => <Country 
                handleVisitedCountry={handleVisitedCountry}
                key={country.cca3}
                country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;