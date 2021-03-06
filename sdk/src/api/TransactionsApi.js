/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.318
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
    define(['ApiClient', 'model/ApiListResponseOfTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.TransactionsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfTransaction);
  }
}(this, function(ApiClient, ApiListResponseOfTransaction) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 0.0.318
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTransactionsUsingGET operation.
     * @callback module:api/TransactionsApi~getTransactionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account transactions
     * @param {String} consent Consent Token
     * @param {String} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts._with with
     * @param {String} opts.from from
     * @param {String} opts.before before
     * @param {Number} opts.limit limit
     * @param {module:model/String} opts.sort sort
     * @param {Number} opts.offset offset
     * @param {String} opts.cursor cursor
     * @param {module:api/TransactionsApi~getTransactionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfTransaction}
     */
    this.getTransactionsUsingGET = function(consent, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getTransactionsUsingGET");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTransactionsUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'from': opts['from'],
        'before': opts['before'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'offset': opts['offset'],
        'cursor': opts['cursor'],
      };
      var collectionQueryParams = {
        'with': {
          value: opts['_with'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfTransaction;
      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
