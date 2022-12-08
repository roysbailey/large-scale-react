
export const CountryInfo = ({countryDetails}) => {

    if (!countryDetails) return;

    return (
        <div>
            <div>Name: {countryDetails.data.name}</div>
            <div>Capital: {countryDetails.data.capital}</div>
            <div>Number of regions: {countryDetails.data.numRegions}</div>
            <div>Main currency: {countryDetails.data.currencyCodes[0]}</div>
            <div><img src={countryDetails.data.flagImageUri} alt="Country flag" width={400}></img> </div>
        </div>
    )
}
