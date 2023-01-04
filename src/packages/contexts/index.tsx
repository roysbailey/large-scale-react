import React from "react"

type CountryCtxType = {
    selectedCountryCode: string;
    setSelectedCountryCode: (value: string) => void;
}

type UserCtxType = {
    userName: string;
    setUserName: (value: string) => void;
}

const CountryCtx = React.createContext<CountryCtxType>({
    selectedCountryCode: "",
    setSelectedCountryCode: function() { return "" }
});

const UserCtx = React.createContext<UserCtxType>({
    userName: "",
    setUserName: function() { return "" }
});

export { CountryCtx, UserCtx }
