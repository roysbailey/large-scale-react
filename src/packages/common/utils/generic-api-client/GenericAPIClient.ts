import HttpStatusCode from "@cc-cp-common/types";

type VoidCallback = () => void;
type ResponseCallback = (response: Response) => void;

interface HasId {
  id: string;
}

class ApiClientProps {
    apiVersion?: string;
    preExecuteCallback?: VoidCallback;
    postExecuteCallback? : ResponseCallback;
    notAuthenticatedErrorCallback?: VoidCallback;
    notAuthorisedErrorCallback?: VoidCallback;
    apiErrorCallback?: ResponseCallback;
}

interface ApiClientResult<T> {
  status: HttpStatusCode;
  data: T;
}

interface GenericAPIResponse {
    status: HttpStatusCode;
    message: string;
  }

class GenericAPIClient {
    private DefaultApiVersion: string = '1.0';
    constructor(private apiProps: ApiClientProps = new ApiClientProps()) {};

  async getResource<T extends HasId>(url: string): Promise<ApiClientResult<T> | ApiClientResult<GenericAPIResponse>> {
    if (typeof this.apiProps.preExecuteCallback === 'function') this.apiProps.preExecuteCallback();
    const response: Response = await fetch(
      url,
      {method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-version': this.apiProps.apiVersion === undefined ? this.DefaultApiVersion : this.apiProps.apiVersion
        }    
      });
    const data = await response.json() as T;
    const status = response.status;
    if (typeof this.apiProps.postExecuteCallback === 'function') this.apiProps.postExecuteCallback(response);
    switch(status)
    {
      case HttpStatusCode.UNAUTHORIZED:
        if (typeof this.apiProps.notAuthenticatedErrorCallback === 'function') this.apiProps.notAuthenticatedErrorCallback();
        break;

      case HttpStatusCode.FORBIDDEN:
        if (typeof this.apiProps.notAuthorisedErrorCallback === 'function') this.apiProps.notAuthorisedErrorCallback();
        break;
      case HttpStatusCode.INTERNAL_SERVER_ERROR:
        if (typeof this.apiProps.apiErrorCallback === 'function') this.apiProps.apiErrorCallback(response);
        break;
      }

      return { status: status, data: data};
  }
}

export {GenericAPIClient, HttpStatusCode, ApiClientProps}
export type {HasId};