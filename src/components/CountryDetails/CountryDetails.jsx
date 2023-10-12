import CountryData from "../CountryData/CountryData";

const CountryDetails = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Details</h4>
            <CountryData
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            >
            </CountryData>
        </div>
    );
};

export default CountryDetails;