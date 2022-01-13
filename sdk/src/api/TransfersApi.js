/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.157.0
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
    define(['ApiClient', 'model/ApiResponseOfTransferResponse', 'model/TransferRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfTransferResponse'), require('../model/TransferRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.TransfersApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfTransferResponse, root.YapilyApi.TransferRequest);
  }
}(this, function(ApiClient, ApiResponseOfTransferResponse, TransferRequest) {
  'use strict';

  /**
   * Transfers service.
   * @module api/TransfersApi
   * @version 1.249.0
   */

  /**
   * Constructs a new TransfersApi. 
   * @alias module:api/TransfersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transferUsingPUT operation.
     * @callback module:api/TransfersApi~transferUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfTransferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer money from one account to another account accessible with the same consent
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:model/TransferRequest} opts.transferRequest transferRequest
     * @param {module:api/TransfersApi~transferUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfTransferResponse}
     */
    this.transferUsingPUT = function(consent, accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['transferRequest'];
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling transferUsingPUT");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transferUsingPUT");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfTransferResponse;
      return this.apiClient.callApi(
        '/accounts/{accountId}/transfer', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
