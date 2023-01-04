import React, { useState } from 'react'
import { CountryCtx, UserCtx } from '..';

export default function TestContextWrapper({children}:any) {
    const [selectedCountryCode, setSelectedCountryCode] = useState();
    const countryCtx = { selectedCountryCode, setSelectedCountryCode };

    const [userName, setUserName] = useState("");
    const userCtx = { userName, setUserName };

    return (
        <UserCtx.Provider value={userCtx}>
            <CountryCtx.Provider value={countryCtx}>
                {children}
            </CountryCtx.Provider>
        </UserCtx.Provider>
    )
}