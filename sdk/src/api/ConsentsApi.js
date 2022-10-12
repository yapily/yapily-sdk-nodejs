/**
 * Yapily API
 * The Yapily API enables connections between your application and users' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: support@yapily.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiErrorResponse from '../model/ApiErrorResponse';
import ApiListResponseOfConsent from '../model/ApiListResponseOfConsent';
import ApiResponseError from '../model/ApiResponseError';
import ApiResponseOfConsent from '../model/ApiResponseOfConsent';
import ApiResponseOfConsentDeleteResponse from '../model/ApiResponseOfConsentDeleteResponse';
import Consent from '../model/Consent';
import ConsentAuthCodeRequest from '../model/ConsentAuthCodeRequest';
import ExtendConsentRequest from '../model/ExtendConsentRequest';
import OneTimeTokenRequest from '../model/OneTimeTokenRequest';

/**
* Consents service.
* @module api/ConsentsApi
* @version 2.13.1
*/
export default class ConsentsApi {

    /**
    * Constructs a new ConsentsApi. 
    * @alias module:api/ConsentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/ConsentsApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsentDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Consent
     * Delete a consent using the consent Id
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceDelete __Optional__. Whether to force the deletion. (default to true)
     * @param {module:api/ConsentsApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsentDeleteResponse}
     */
    callDelete(consentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling callDelete");
      }

      let pathParams = {
        'consentId': consentId
      };
      let queryParams = {
        'forceDelete': opts['forceDelete']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfConsentDeleteResponse;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createConsentWithCode operation.
     * @callback module:api/ConsentsApi~createConsentWithCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exchange OAuth2 Code
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * @param {module:model/ConsentAuthCodeRequest} consentAuthCodeRequest 
     * @param {module:api/ConsentsApi~createConsentWithCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    createConsentWithCode(consentAuthCodeRequest, callback) {
      let postBody = consentAuthCodeRequest;
      // verify the required parameter 'consentAuthCodeRequest' is set
      if (consentAuthCodeRequest === undefined || consentAuthCodeRequest === null) {
        throw new Error("Missing the required parameter 'consentAuthCodeRequest' when calling createConsentWithCode");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = Consent;
      return this.apiClient.callApi(
        '/consent-auth-code', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the extendConsent operation.
     * @callback module:api/ConsentsApi~extendConsentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend Consent
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {module:model/ExtendConsentRequest} extendConsentRequest 
     * @param {module:api/ConsentsApi~extendConsentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsent}
     */
    extendConsent(consentId, extendConsentRequest, callback) {
      let postBody = extendConsentRequest;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling extendConsent");
      }
      // verify the required parameter 'extendConsentRequest' is set
      if (extendConsentRequest === undefined || extendConsentRequest === null) {
        throw new Error("Missing the required parameter 'extendConsentRequest' when calling extendConsent");
      }

      let pathParams = {
        'consentId': consentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfConsent;
      return this.apiClient.callApi(
        '/consents/{consentId}/extend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentById operation.
     * @callback module:api/ConsentsApi~getConsentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consent
     * Get consent using the consent Id
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {module:api/ConsentsApi~getConsentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsent}
     */
    getConsentById(consentId, callback) {
      let postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getConsentById");
      }

      let pathParams = {
        'consentId': consentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfConsent;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentBySingleAccessConsent operation.
     * @callback module:api/ConsentsApi~getConsentBySingleAccessConsentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exchange One Time Token
     * Exchange a One-time-token for the consent token
     * @param {module:model/OneTimeTokenRequest} oneTimeTokenRequest 
     * @param {module:api/ConsentsApi~getConsentBySingleAccessConsentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    getConsentBySingleAccessConsent(oneTimeTokenRequest, callback) {
      let postBody = oneTimeTokenRequest;
      // verify the required parameter 'oneTimeTokenRequest' is set
      if (oneTimeTokenRequest === undefined || oneTimeTokenRequest === null) {
        throw new Error("Missing the required parameter 'oneTimeTokenRequest' when calling getConsentBySingleAccessConsent");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = Consent;
      return this.apiClient.callApi(
        '/consent-one-time-token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsents operation.
     * @callback module:api/ConsentsApi~getConsentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consents
     * Used to retrieve all the consents created for each user within an application
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterApplicationUserId __Optional__. Filter records based on the list of `applicationUserId` users provided.
     * @param {Array.<String>} opts.filterUserUuid __Optional__. Filter records based on the list of `userUuid` users provided.
     * @param {Array.<String>} opts.filterInstitution __Optional__. Filter records based on the list of `Institution` provided.
     * @param {Array.<String>} opts.filterStatus __Optional__. Filter records based on the list of `Consent` [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c=200&path=data/status&t=response).
     * @param {String} opts.from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
     * @param {String} opts.before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {Number} opts.offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. (default to 0)
     * @param {module:api/ConsentsApi~getConsentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfConsent}
     */
    getConsents(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter[applicationUserId]': this.apiClient.buildCollectionParam(opts['filterApplicationUserId'], 'multi'),
        'filter[userUuid]': this.apiClient.buildCollectionParam(opts['filterUserUuid'], 'multi'),
        'filter[institution]': this.apiClient.buildCollectionParam(opts['filterInstitution'], 'multi'),
        'filter[status]': this.apiClient.buildCollectionParam(opts['filterStatus'], 'multi'),
        'from': opts['from'],
        'before': opts['before'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiListResponseOfConsent;
      return this.apiClient.callApi(
        '/consents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
