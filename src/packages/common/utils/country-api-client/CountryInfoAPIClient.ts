import { GenericAPIClient } from '@cc-cp-common/generic-api-client'

class CountryInfoAPIClient extends GenericAPIClient {
    constructor () {
        super({
            preExecuteCallback: preExecuteCallback,
            postExecuteCallback: postExecuteCallback
        });
    }

}

function preExecuteCallback() {
    console.log('Pre API call');
}

function postExecuteCallback(r : Response) {
    console.log('Post API call');
}

const countryInfoAPIClient = new CountryInfoAPIClient();

export default countryInfoAPIClient;