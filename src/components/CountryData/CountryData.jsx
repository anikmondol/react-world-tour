
const CountryData = ({ country }) => {
    return (
        <div>
            <hr />
            <p>name:<small>{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;