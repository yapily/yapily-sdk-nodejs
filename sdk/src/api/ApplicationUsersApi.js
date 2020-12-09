/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.287
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
    define(['ApiClient', 'model/ApiListResponseOfBulkUserDelete', 'model/ApiResponseOfBulkUserDeleteDetails', 'model/ApiResponseOfUserDeleteResponse', 'model/ApplicationUser', 'model/NewApplicationUser', 'model/UserDeleteRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfBulkUserDelete'), require('../model/ApiResponseOfBulkUserDeleteDetails'), require('../model/ApiResponseOfUserDeleteResponse'), require('../model/ApplicationUser'), require('../model/NewApplicationUser'), require('../model/UserDeleteRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApplicationUsersApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfBulkUserDelete, root.YapilyApi.ApiResponseOfBulkUserDeleteDetails, root.YapilyApi.ApiResponseOfUserDeleteResponse, root.YapilyApi.ApplicationUser, root.YapilyApi.NewApplicationUser, root.YapilyApi.UserDeleteRequest);
  }
}(this, function(ApiClient, ApiListResponseOfBulkUserDelete, ApiResponseOfBulkUserDeleteDetails, ApiResponseOfUserDeleteResponse, ApplicationUser, NewApplicationUser, UserDeleteRequest) {
  'use strict';

  /**
   * ApplicationUsers service.
   * @module api/ApplicationUsersApi
   * @version 0.0.287
   */

  /**
   * Constructs a new ApplicationUsersApi. 
   * @alias module:api/ApplicationUsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserUsingPOST operation.
     * @callback module:api/ApplicationUsersApi~addUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an application user
     * @param {module:model/NewApplicationUser} newApplicationUser newApplicationUser
     * @param {module:api/ApplicationUsersApi~addUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationUser}
     */
    this.addUserUsingPOST = function(newApplicationUser, callback) {
      var postBody = newApplicationUser;
      // verify the required parameter 'newApplicationUser' is set
      if (newApplicationUser === undefined || newApplicationUser === null) {
        throw new Error("Missing the required parameter 'newApplicationUser' when calling addUserUsingPOST");
      }

      var pathParams = {
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
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApplicationUser;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserUsingDELETE operation.
     * @callback module:api/ApplicationUsersApi~deleteUserUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfUserDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application user and sub-resources (including consent resources on institution APIs if they exist)
     * @param {String} userUuid userUuid
     * @param {module:api/ApplicationUsersApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfUserDeleteResponse}
     */
    this.deleteUserUsingDELETE = function(userUuid, callback) {
      var postBody = null;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling deleteUserUsingDELETE");
      }

      var pathParams = {
        'userUuid': userUuid
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
      var returnType = ApiResponseOfUserDeleteResponse;
      return this.apiClient.callApi(
        '/users/{userUuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeleteUsersJobUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getDeleteUsersJobUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfBulkUserDeleteDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of a user deletion job
     * @param {String} jobId job-id
     * @param {module:api/ApplicationUsersApi~getDeleteUsersJobUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfBulkUserDeleteDetails}
     */
    this.getDeleteUsersJobUsingGET = function(jobId, callback) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getDeleteUsersJobUsingGET");
      }

      var pathParams = {
        'job-id': jobId
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
      var returnType = ApiResponseOfBulkUserDeleteDetails;
      return this.apiClient.callApi(
        '/delete-users/{job-id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeleteUsersJobsUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getDeleteUsersJobsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfBulkUserDelete} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of all user deletion jobs
     * @param {module:api/ApplicationUsersApi~getDeleteUsersJobsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfBulkUserDelete}
     */
    this.getDeleteUsersJobsUsingGET = function(callback) {
      var postBody = null;

      var pathParams = {
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
      var returnType = ApiListResponseOfBulkUserDelete;
      return this.apiClient.callApi(
        '/delete-users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an application user
     * @param {String} userUuid userUuid
     * @param {module:api/ApplicationUsersApi~getUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationUser}
     */
    this.getUserUsingGET = function(userUuid, callback) {
      var postBody = null;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling getUserUsingGET");
      }

      var pathParams = {
        'userUuid': userUuid
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
      var returnType = ApplicationUser;
      return this.apiClient.callApi(
        '/users/{userUuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getUsersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApplicationUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application users
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterApplicationUserId Filter users by the provided application user Id (applicationUserId) when the user was created.
     * @param {module:api/ApplicationUsersApi~getUsersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApplicationUser>}
     */
    this.getUsersUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'filter[applicationUserId]': {
          value: opts['filterApplicationUserId'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [ApplicationUser];
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startDeleteUsersJobUsingPOST operation.
     * @callback module:api/ApplicationUsersApi~startDeleteUsersJobUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfBulkUserDeleteDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a job to delete application users by specifying their identifiers
     * @param {module:model/UserDeleteRequest} userDeleteRequest userDeleteRequest
     * @param {module:api/ApplicationUsersApi~startDeleteUsersJobUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfBulkUserDeleteDetails}
     */
    this.startDeleteUsersJobUsingPOST = function(userDeleteRequest, callback) {
      var postBody = userDeleteRequest;
      // verify the required parameter 'userDeleteRequest' is set
      if (userDeleteRequest === undefined || userDeleteRequest === null) {
        throw new Error("Missing the required parameter 'userDeleteRequest' when calling startDeleteUsersJobUsingPOST");
      }

      var pathParams = {
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
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfBulkUserDeleteDetails;
      return this.apiClient.callApi(
        '/delete-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
