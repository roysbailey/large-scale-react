import { GenericAPIClient, ApiClientProps, HasId } from './GenericAPIClient';
import HttpStatusCode from '../types/HttpStatusCode';

interface StronglyTypedResponse extends HasId {
    id: string;
    name: string;
    age: number;
}

describe('Api Client handles success API responses', () => {

    it('handles 200 OK successfully - WITH callbacks', async () => {
        const mockPreCallCallback = jest.fn(() => {});
        const mockPostCallCallback = jest.fn(() => {});
        SuccessApiClientTestHelper({ preExecuteCallback: mockPreCallCallback, postExecuteCallback: mockPostCallCallback }, mockPreCallCallback, mockPostCallCallback);
    });

    it('handles 200 OK successfully - WITHOUT callbacks', async () => {
        SuccessApiClientTestHelper({  }, undefined, undefined);
    });
});

describe('Api Client handles non success API responses', () => {
    it('handles 500 internal server error successfully - WITHOUT callback', async () => {
        NoneSuccessApiClientTestHelper({  }, undefined, HttpStatusCode.INTERNAL_SERVER_ERROR, 'An error occured, please contact support');
    });

    it('handles 500 internal server error successfully - WITH callback', async () => {
        const mockCallback = jest.fn(() => {});
        NoneSuccessApiClientTestHelper({ apiErrorCallback : mockCallback }, mockCallback, HttpStatusCode.INTERNAL_SERVER_ERROR, 'An error occured, please contact support');
    });

    it('handles 401 Not Authorised - WITH callback', async () => {
        const mockCallback = jest.fn(() => {});
        NoneSuccessApiClientTestHelper({ notAuthenticatedErrorCallback : mockCallback }, mockCallback, HttpStatusCode.UNAUTHORIZED, 'You are not currently logged in');
    });

    it('handles 401 Not Authorised - WITHOUT callback', async () => {
        NoneSuccessApiClientTestHelper({  }, undefined, HttpStatusCode.UNAUTHORIZED, 'You are not currently logged in');
    });

    it('handles 403 Forbidden - WITH callback', async () => {
        const mockCallback = jest.fn(() => {});
        NoneSuccessApiClientTestHelper({ notAuthorisedErrorCallback : mockCallback }, mockCallback, HttpStatusCode.FORBIDDEN, 'You do not have permissions for this operation');
    });   

    it('handles 403 Forbidden - WITHOUT callback', async () => {
        NoneSuccessApiClientTestHelper({  }, undefined, HttpStatusCode.FORBIDDEN, 'You do not have permissions for this operation');
    });       

});

async function NoneSuccessApiClientTestHelper(apiClientProps: ApiClientProps, callbackMock: jest.Mock<void, []> | undefined, expectedStatus: HttpStatusCode, responseMessage: string) {
    // Arrange
    const apiClient = new GenericAPIClient(apiClientProps);
    jest.spyOn(global, "fetch").mockImplementation( 
        jest.fn(
        () => Promise.resolve( {json: () => Promise.resolve({ message: responseMessage }), status: expectedStatus}), 
    ) as jest.Mock ) 

    // Act
    const {status, data} = await apiClient.getResource<any>('https/cc/api/mock');

    // Assert
    if (typeof callbackMock === 'function') expect(callbackMock.mock.calls).toHaveLength(1);
    expect(status).toBe(expectedStatus);
    expect(data.message).toEqual(responseMessage);
}

async function SuccessApiClientTestHelper(apiClientProps: ApiClientProps, preCallbackMock: jest.Mock<void, []> | undefined, postCallbackMock: jest.Mock<void, []> | undefined) {
    // Arrange
    const mockResponseData = { id: '1', name: 'bob', age: 22 };
    const apiClient = new GenericAPIClient(apiClientProps);
    jest.spyOn(global, "fetch").mockImplementation( 
        jest.fn(
        () => Promise.resolve( {json: () => Promise.resolve(mockResponseData), status: HttpStatusCode.OK}), 
    ) as jest.Mock ) 

    // Act
    const {status, data} = await apiClient.getResource<StronglyTypedResponse>('https/cc/api/mock');

    // Assert
    if (typeof preCallbackMock === 'function') expect(preCallbackMock.mock.calls).toHaveLength(1);
    if (typeof postCallbackMock === 'function') expect(postCallbackMock.mock.calls).toHaveLength(1);
    expect(status).toBe(HttpStatusCode.OK);
    let typedData = data as StronglyTypedResponse;
    expect(typedData.id).toEqual(mockResponseData.id);
    expect(typedData.name).toEqual(mockResponseData.name);
    expect(typedData.age).toEqual(mockResponseData.age);
}



    // it('handles 500 internal server error successfully - NO callback', async () => {
    //     // Arrange
    //     const apiClient = new GenericAPIClient<any>();
    //     const errorMessage = 'An error occured, please contact support';
    //     jest.spyOn(global, "fetch").mockImplementation( 
    //         jest.fn(
    //           () => Promise.resolve( {json: () => Promise.resolve({ message: errorMessage }), status: HttpStatusCode.INTERNAL_SERVER_ERROR}), 
    //       ) as jest.Mock ) 

    //       // Act
    //       const {status, data} = await apiClient.getResource('https/cc/api/mock');

    //       // Assert
    //       expect(status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
    //       expect(data.message).toEqual(errorMessage);
    // });

    // it('handles 500 internal server error successfully - WITH callback OLD', async () => {
    //     // Arrange
    //     const mockCallback = jest.fn(x => x);
    //     const apiClient = new GenericAPIClient<any>({ apiErrorCallback: mockCallback });
    //     const errorMessage = 'An error occured, please contact support';
    //     jest.spyOn(global, "fetch").mockImplementation( 
    //         jest.fn(
    //           () => Promise.resolve( {json: () => Promise.resolve({ message: errorMessage }), status: HttpStatusCode.INTERNAL_SERVER_ERROR}), 
    //       ) as jest.Mock ) 

    //       // Act
    //       const {status, data} = await apiClient.getResource('https/cc/api/mock');

    //       // Assert
    //       expect(mockCallback.mock.calls).toHaveLength(1);
    //       expect(status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
    //       expect(data.message).toEqual(errorMessage);
    // });