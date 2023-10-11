import './Country.css'

const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, area, capital, region, independent} = country;
    return (
        <div className='Country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Independent: {independent?"Yes Independent": "No"}</p>
        </div>
    );
};

export default Country;