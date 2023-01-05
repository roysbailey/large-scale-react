import React, { useState } from 'react';
import { CountryCtx, UserCtx } from '..';

type Props = React.PropsWithChildren<{}>;

export default function TestContextWrapper(props: Props) {
  const { children } = props

  const [selectedCountryCode, setSelectedCountryCode] = useState('')
  const countryCtx = { selectedCountryCode, setSelectedCountryCode }

  const [userName, setUserName] = useState('')
  const userCtx = { userName, setUserName }

  return (
    <UserCtx.Provider value={userCtx}>
      <CountryCtx.Provider value={countryCtx}>
        {children}
      </CountryCtx.Provider>
    </UserCtx.Provider>
  );
}
