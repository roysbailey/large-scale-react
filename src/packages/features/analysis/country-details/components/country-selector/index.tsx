import { CountryCtx } from "@cc-cp-context/contexts"
import { useContext } from "react"

export const CountrySelector = ({selectCountry}:any) => {
    const {selectedCountryCode} = useContext(CountryCtx);
    
    return (
        <div>
            <select value={selectedCountryCode} onChange={selectCountry}>
                <option value=""></option>
                <option value="gb">Great Britain</option>
                <option value="it">Italy</option>
                <option value="fr">France</option>
                <option value="us">USA</option>
            </select>
        </div>
    )
}