/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.44.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiListResponseOfConsent', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/ApiResponseOfConsent', 'model/ApiResponseOfConsentDeleteResponse', 'model/Consent', 'model/ConsentAuthCodeRequest', 'model/CreateConsentAccessToken', 'model/OneTimeTokenRequest', 'model/PreAuthorisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfConsent'), require('../model/ApiResponseOfAuthorisationRequestResponse'), require('../model/ApiResponseOfConsent'), require('../model/ApiResponseOfConsentDeleteResponse'), require('../model/Consent'), require('../model/ConsentAuthCodeRequest'), require('../model/CreateConsentAccessToken'), require('../model/OneTimeTokenRequest'), require('../model/PreAuthorisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ConsentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfConsent, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse, root.YapilyApi.ApiResponseOfConsent, root.YapilyApi.ApiResponseOfConsentDeleteResponse, root.YapilyApi.Consent, root.YapilyApi.ConsentAuthCodeRequest, root.YapilyApi.CreateConsentAccessToken, root.YapilyApi.OneTimeTokenRequest, root.YapilyApi.PreAuthorisationRequest);
  }
}(this, function(ApiClient, ApiListResponseOfConsent, ApiResponseOfAuthorisationRequestResponse, ApiResponseOfConsent, ApiResponseOfConsentDeleteResponse, Consent, ConsentAuthCodeRequest, CreateConsentAccessToken, OneTimeTokenRequest, PreAuthorisationRequest) {
  'use strict';

  /**
   * Consents service.
   * @module api/ConsentsApi
   * @version 1.44.0
   */

  /**
   * Constructs a new ConsentsApi. 
   * @alias module:api/ConsentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addConsentUsingPOST operation.
     * @callback module:api/ConsentsApi~addConsentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post consent
     * @param {String} userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param {module:model/CreateConsentAccessToken} createConsentAccessToken createConsentAccessToken
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/ConsentsApi~addConsentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.addConsentUsingPOST = function(userUuid, createConsentAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = createConsentAccessToken;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling addConsentUsingPOST");
      }
      // verify the required parameter 'createConsentAccessToken' is set
      if (createConsentAccessToken === undefined || createConsentAccessToken === null) {
        throw new Error("Missing the required parameter 'createConsentAccessToken' when calling addConsentUsingPOST");
      }

      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createConsentWithCodeUsingPOST operation.
     * @callback module:api/ConsentsApi~createConsentWithCodeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post auth-code and auth-state
     * @param {module:model/ConsentAuthCodeRequest} consentByAuthCode consentByAuthCode
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/ConsentsApi~createConsentWithCodeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.createConsentWithCodeUsingPOST = function(consentByAuthCode, opts, callback) {
      opts = opts || {};
      var postBody = consentByAuthCode;
      // verify the required parameter 'consentByAuthCode' is set
      if (consentByAuthCode === undefined || consentByAuthCode === null) {
        throw new Error("Missing the required parameter 'consentByAuthCode' when calling createConsentWithCodeUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/consent-auth-code', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPreAuthorisationRequestUsingPOST operation.
     * @callback module:api/ConsentsApi~createPreAuthorisationRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate request for user to pre authorise
     * @param {module:model/PreAuthorisationRequest} preAuthorisationRequest preAuthorisationRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/ConsentsApi~createPreAuthorisationRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.createPreAuthorisationRequestUsingPOST = function(preAuthorisationRequest, opts, callback) {
      opts = opts || {};
      var postBody = preAuthorisationRequest;
      // verify the required parameter 'preAuthorisationRequest' is set
      if (preAuthorisationRequest === undefined || preAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'preAuthorisationRequest' when calling createPreAuthorisationRequestUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/pre-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsingDELETE operation.
     * @callback module:api/ConsentsApi~deleteUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsentDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete consent
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {Boolean} opts.forceDelete __Optional__. Whether to force the deletion. (default to true)
     * @param {module:api/ConsentsApi~deleteUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsentDeleteResponse}
     */
    this.deleteUsingDELETE = function(consentId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling deleteUsingDELETE");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
        'forceDelete': opts['forceDelete'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfConsentDeleteResponse;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentByIdUsingGET operation.
     * @callback module:api/ConsentsApi~getConsentByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get consent
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/ConsentsApi~getConsentByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsent}
     */
    this.getConsentByIdUsingGET = function(consentId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getConsentByIdUsingGET");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfConsent;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentBySingleAccessConsentUsingPOST operation.
     * @callback module:api/ConsentsApi~getConsentBySingleAccessConsentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post one time token
     * @param {module:model/OneTimeTokenRequest} oneTimeToken oneTimeToken
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/ConsentsApi~getConsentBySingleAccessConsentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.getConsentBySingleAccessConsentUsingPOST = function(oneTimeToken, opts, callback) {
      opts = opts || {};
      var postBody = oneTimeToken;
      // verify the required parameter 'oneTimeToken' is set
      if (oneTimeToken === undefined || oneTimeToken === null) {
        throw new Error("Missing the required parameter 'oneTimeToken' when calling getConsentBySingleAccessConsentUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/consent-one-time-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentsUsingGET operation.
     * @callback module:api/ConsentsApi~getConsentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get consents sorted by creation date
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {Array.<String>} opts.filterApplicationUserId __Optional__. Filter records based on the list of `applicationUserId` users provided.
     * @param {Array.<String>} opts.filterUserUuid __Optional__. Filter records based on the list of `userUuid` users provided.
     * @param {Array.<String>} opts.filterInstitution __Optional__. Filter records based on the list of `Institution` provided.
     * @param {Array.<String>} opts.filterStatus __Optional__. Filter records based on the list of `Consent` [statuses](https://docs.yapily.com/api/#tocS_AuthorisationStatus).
     * @param {String} opts.from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
     * @param {String} opts.before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
     * @param {Number} opts.limit Use this parameter to limit consent results, max limit is 20
     * @param {Number} opts.offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. (default to 0)
     * @param {module:api/ConsentsApi~getConsentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfConsent}
     */
    this.getConsentsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'before': opts['before'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
        'filter[applicationUserId]': {
          value: opts['filterApplicationUserId'],
          collectionFormat: 'multi'
        },
        'filter[userUuid]': {
          value: opts['filterUserUuid'],
          collectionFormat: 'multi'
        },
        'filter[institution]': {
          value: opts['filterInstitution'],
          collectionFormat: 'multi'
        },
        'filter[status]': {
          value: opts['filterStatus'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfConsent;
      return this.apiClient.callApi(
        '/consents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserConsentsUsingGET operation.
     * @callback module:api/ConsentsApi~getUserConsentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get latest user consents
     * @param {String} userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.institutionId Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated `institutionId` query param.
     * @param {Number} opts.limit Use this parameter to limit consent results, max limit is 20
     * @param {module:api/ConsentsApi~getUserConsentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consent>}
     */
    this.getUserConsentsUsingGET = function(userUuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling getUserConsentsUsingGET");
      }

      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
        'institutionId': opts['institutionId'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [Consent];
      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
