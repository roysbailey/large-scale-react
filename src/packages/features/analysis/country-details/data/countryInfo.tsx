import countryInfoApiClient from '@cc-cp-common/countryinfo-api-client'
import { HasId } from '@cc-cp-common/generic-api-client';
import HttpStatusCode from "@cc-cp-common/types";


// {"data":{"capital":"","code":"GB","callingCode":"+44","currencyCodes":["GBP"],"flagImageUri":"","name":"United Kingdom","numRegions":20,"wikiDataId":"Q145"}}

interface CountryInfoDataRoot extends HasId {
  id: string;
  data: CountryInfoData;
}

export interface CountryInfoData {
  capital: string;
  code: string;
  callingCode: string;
  currencyCodes: string[];
  flagImageUri: string;
  name: string;
  numRegions: number;
  wikiDataId: string;
}

export const fetchCountryInfo = async (countryCode: string, loading: any) : Promise<CountryInfoData> => {
    loading(true);
    const {status, data} = await countryInfoApiClient.getResource('http://geodb-free-service.wirefreethought.com/v1/geo/countries/' + countryCode)
    loading(false);
    if (status !== HttpStatusCode.OK)
    {
      // if status was an error, in the real world we would have already redirected!
    }
    const typedResponse = data as CountryInfoDataRoot;
    return typedResponse.data;
  };