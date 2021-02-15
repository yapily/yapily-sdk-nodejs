/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.308
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
    define(['ApiClient', 'model/ApiResponseOfBalances'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfBalances'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.BalancesApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfBalances);
  }
}(this, function(ApiClient, ApiResponseOfBalances) {
  'use strict';

  /**
   * Balances service.
   * @module api/BalancesApi
   * @version 0.0.308
   */

  /**
   * Constructs a new BalancesApi. 
   * @alias module:api/BalancesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAccountBalancesUsingGET operation.
     * @callback module:api/BalancesApi~getAccountBalancesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfBalances} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account balances
     * @param {String} consent Consent Token
     * @param {String} accountId accountId
     * @param {module:api/BalancesApi~getAccountBalancesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfBalances}
     */
    this.getAccountBalancesUsingGET = function(consent, accountId, callback) {
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountBalancesUsingGET");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountBalancesUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfBalances;
      return this.apiClient.callApi(
        '/accounts/{accountId}/balances', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
