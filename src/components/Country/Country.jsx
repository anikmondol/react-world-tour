import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, capital, region, independent, cca3 } = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`Country ${visited && 'Visited'}`}>
            <h3 style={{color: visited ? 'blue' : 'red'}}>Name: {name.common}</h3>
            <img className='Pic' src={flags.png} alt="" />
            <p>population: {population}</p>
            {/* <p>Capital: {capital}</p> */}
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            {/* <p>Independent: {independent ? "Yes Independent" : "No"}</p> */}
            <p><small>Code: {cca3}</small></p>
            <button className='Visited-Button' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <h5 className='Visited-Text'>{visited ? 'I have visited this country' : 'I want to visited'}</h5>
            <button className='button' onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <hr />
            <CountryDetails
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;