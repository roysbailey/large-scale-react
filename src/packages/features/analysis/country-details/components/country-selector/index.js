
export const CountrySelector = ({selectCountry}) => {

    return (
        <div>
        <select onChange={selectCountry}>
            <option value=""></option>
            <option value="gb">Great Britain</option>
            <option value="it">Italy</option>
            <option value="fr">France</option>
            <option value="us">USA</option>
        </select>
    </div>
    )
}