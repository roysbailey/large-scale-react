export const CountryInfo = ({countryDetails}) => {

    if (!countryDetails) return;

    return (
        <div>
            <div>Country's Name: {countryDetails.name}</div>
            <div>Capital: {countryDetails.capital}</div>
            <div>Number of regions: {countryDetails.numRegions}</div>
            <div>Main currency: {countryDetails.currencyCodes[0]}</div>
            <div><img src={countryDetails.flagImageUri} alt="Country flag" width={400}></img> </div>
        </div>
    )
}
