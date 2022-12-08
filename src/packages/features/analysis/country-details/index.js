import { useState, useEffect } from "react";
import { LoadingSpinner } from '@cc-cp-common/loading-spinner'
import { fetchCountryInfo } from "./data/countryInfo";
import { CountryInfo } from "./components/country-info";
import {CountrySelector} from "./components/country-selector";

export const CountryDetails = () => {

    const [selectedCountryCode, setSelectedCountryCode] = useState();
    const [countryDetails, setCountryDetails] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (!selectedCountryCode) { setCountryDetails(undefined);  return; };
            let info = await fetchCountryInfo(selectedCountryCode, setLoading);
            setCountryDetails(info);
        }
        fetchData();
    }, [selectedCountryCode]);    

    const selectCountry = (event) => {
        setSelectedCountryCode(event.target.value);
      };

    return (
        <div>
            <h2>Country details!</h2>
            Select a country from the list to see details!
            <CountrySelector selectCountry={selectCountry} />
            {loading ? <LoadingSpinner /> : <CountryInfo countryDetails={countryDetails} />}
        </div>
    )
}