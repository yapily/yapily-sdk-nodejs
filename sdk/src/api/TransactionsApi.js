/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.167.0
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
   * @version 1.168.0
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
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {Array.<String>} opts._with __Optional__. Can be `categories`, `categories-business` or `merchant`. When set, will include enrichment data in the transactions returned. <br><br>Enrichment data is optional, e.g. when 'merchant' enrichment data is requested, the enrichment response will include merchant data only if it can be evaluated from the transaction.
     * @param {String} opts.from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
     * @param {String} opts.before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {module:model/String} opts.sort __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
     * @param {Number} opts.offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param {String} opts.cursor __Optional__. This property is not currently in use.
     * @param {module:api/TransactionsApi~getTransactionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfTransaction}
     */
    this.getTransactionsUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTransactionsUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getTransactionsUsingGET");
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
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'consent': consent,
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
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
