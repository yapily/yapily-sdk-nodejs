/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.364
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
    define(['ApiClient', 'model/ApiListResponseOfAccountStatement', 'model/ApiResponseOfAccountStatement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfAccountStatement'), require('../model/ApiResponseOfAccountStatement'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.StatementsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfAccountStatement, root.YapilyApi.ApiResponseOfAccountStatement);
  }
}(this, function(ApiClient, ApiListResponseOfAccountStatement, ApiResponseOfAccountStatement) {
  'use strict';

  /**
   * Statements service.
   * @module api/StatementsApi
   * @version 0.0.364
   */

  /**
   * Constructs a new StatementsApi. 
   * @alias module:api/StatementsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStatementFileUsingGET operation.
     * @callback module:api/StatementsApi~getStatementFileUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account statement file
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} statementId __Mandatory__. The statement Id of the statement file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/StatementsApi~getStatementFileUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.getStatementFileUsingGET = function(consent, accountId, statementId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getStatementFileUsingGET");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getStatementFileUsingGET");
      }
      // verify the required parameter 'statementId' is set
      if (statementId === undefined || statementId === null) {
        throw new Error("Missing the required parameter 'statementId' when calling getStatementFileUsingGET");
      }

      var pathParams = {
        'accountId': accountId,
        'statementId': statementId
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
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi(
        '/accounts/{accountId}/statements/{statementId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatementUsingGET operation.
     * @callback module:api/StatementsApi~getStatementUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAccountStatement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account statement
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} statementId __Mandatory__. The statement Id of the statement file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/StatementsApi~getStatementUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAccountStatement}
     */
    this.getStatementUsingGET = function(consent, accountId, statementId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getStatementUsingGET");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getStatementUsingGET");
      }
      // verify the required parameter 'statementId' is set
      if (statementId === undefined || statementId === null) {
        throw new Error("Missing the required parameter 'statementId' when calling getStatementUsingGET");
      }

      var pathParams = {
        'accountId': accountId,
        'statementId': statementId
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
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAccountStatement;
      return this.apiClient.callApi(
        '/accounts/{accountId}/statements/{statementId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatementsUsingGET operation.
     * @callback module:api/StatementsApi~getStatementsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfAccountStatement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account statements
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
     * @param {String} opts.before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {module:model/String} opts.sort __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
     * @param {Number} opts.offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param {module:api/StatementsApi~getStatementsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfAccountStatement}
     */
    this.getStatementsUsingGET = function(consent, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getStatementsUsingGET");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getStatementsUsingGET");
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
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfAccountStatement;
      return this.apiClient.callApi(
        '/accounts/{accountId}/statements', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
