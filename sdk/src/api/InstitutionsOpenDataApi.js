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
    define(['ApiClient', 'model/ApiResponseOfListOfATMOpenDataResponse', 'model/ApiResponseOfListOfPersonalCurrentAccountData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfListOfATMOpenDataResponse'), require('../model/ApiResponseOfListOfPersonalCurrentAccountData'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.InstitutionsOpenDataApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfListOfATMOpenDataResponse, root.YapilyApi.ApiResponseOfListOfPersonalCurrentAccountData);
  }
}(this, function(ApiClient, ApiResponseOfListOfATMOpenDataResponse, ApiResponseOfListOfPersonalCurrentAccountData) {
  'use strict';

  /**
   * InstitutionsOpenData service.
   * @module api/InstitutionsOpenDataApi
   * @version 1.259.0
   */

  /**
   * Constructs a new InstitutionsOpenDataApi. 
   * @alias module:api/InstitutionsOpenDataApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getATMDataUsingGET operation.
     * @callback module:api/InstitutionsOpenDataApi~getATMDataUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfListOfATMOpenDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves data about all ATMs of the selected institution
     * @param {String} institutionId institutionId
     * @param {module:api/InstitutionsOpenDataApi~getATMDataUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfListOfATMOpenDataResponse}
     */
    this.getATMDataUsingGET = function(institutionId, callback) {
      var postBody = null;
      // verify the required parameter 'institutionId' is set
      if (institutionId === undefined || institutionId === null) {
        throw new Error("Missing the required parameter 'institutionId' when calling getATMDataUsingGET");
      }

      var pathParams = {
        'institutionId': institutionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfListOfATMOpenDataResponse;
      return this.apiClient.callApi(
        '/institutions/{institutionId}/atms', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPersonalCurrentAccountsUsingGET operation.
     * @callback module:api/InstitutionsOpenDataApi~getPersonalCurrentAccountsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfListOfPersonalCurrentAccountData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves details of personal current accounts for an institution
     * @param {String} institutionId institutionId
     * @param {module:api/InstitutionsOpenDataApi~getPersonalCurrentAccountsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfListOfPersonalCurrentAccountData}
     */
    this.getPersonalCurrentAccountsUsingGET = function(institutionId, callback) {
      var postBody = null;
      // verify the required parameter 'institutionId' is set
      if (institutionId === undefined || institutionId === null) {
        throw new Error("Missing the required parameter 'institutionId' when calling getPersonalCurrentAccountsUsingGET");
      }

      var pathParams = {
        'institutionId': institutionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfListOfPersonalCurrentAccountData;
      return this.apiClient.callApi(
        '/institutions/{institutionId}/personal-current-accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
