
const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <hr />
            <p>name:<small>{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;