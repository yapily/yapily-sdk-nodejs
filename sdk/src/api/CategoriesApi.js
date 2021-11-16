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
    define(['ApiClient', 'model/ApiListResponseOfCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CategoriesApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfCategory);
  }
}(this, function(ApiClient, ApiListResponseOfCategory) {
  'use strict';

  /**
   * Categories service.
   * @module api/CategoriesApi
   * @version 1.187.0
   */

  /**
   * Constructs a new CategoriesApi. 
   * @alias module:api/CategoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCategoriesUsingGET operation.
     * @callback module:api/CategoriesApi~getCategoriesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a list of categories returned by the Yapily Categorisation engine for a given locale
     * @param {String} country __Mandatory__. The 2 letter country code e.g. 'GB'.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/CategoriesApi~getCategoriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfCategory}
     */
    this.getCategoriesUsingGET = function(country, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getCategoriesUsingGET");
      }

      var pathParams = {
        'country': country
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
      var returnType = ApiListResponseOfCategory;
      return this.apiClient.callApi(
        '/categories/{country}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
