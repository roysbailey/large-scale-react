export const fetchCountryInfo = async (countryCode:any, loading:(value: boolean) => void) => {
    loading(true);
    const rsp = await fetch("http://geodb-free-service.wirefreethought.com/v1/geo/countries/" + countryCode);
    const countryInfo = await rsp.json();
    loading(false);
    return countryInfo.data;
  };