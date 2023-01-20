import { useState, useEffect, useContext } from "react";
import { LoadingSpinner } from "cc-test-design-system";
import { fetchCountryInfo, CountryInfoData } from "./data/countryInfo";
import { CountryInfo } from "./components/country-info";
import { CountrySelector } from "./components/country-selector";
import { CountryCtx, UserCtx } from "@cc-cp-context/contexts";

export const CountryDetails = () => {

    const {selectedCountryCode, setSelectedCountryCode} = useContext(CountryCtx);
    const {userName} = useContext(UserCtx);
    const [countryDetails, setCountryDetails] = useState<CountryInfoData | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (!selectedCountryCode) { setCountryDetails(undefined);  return; };
            let info = await fetchCountryInfo(selectedCountryCode, setLoading);
            setCountryDetails(info);
        }
        fetchData();
    }, [selectedCountryCode]);

    const selectCountry = (event: { target: { value: string; }; }) => {
        setSelectedCountryCode(event.target.value);
    };

    return (
        <>
            <p>User Name: {userName}</p>
            <h2>Country details!</h2>
            Select a country from the list to see details!
            <CountrySelector selectCountry={selectCountry} />
            {loading ? <LoadingSpinner /> : <CountryInfo countryDetails={countryDetails} />}
        </>
    )
}