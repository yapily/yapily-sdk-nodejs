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
   * @version 1.259.0
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
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/BalancesApi~getAccountBalancesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfBalances}
     */
    this.getAccountBalancesUsingGET = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;
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
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'consent': opts['consent'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
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
