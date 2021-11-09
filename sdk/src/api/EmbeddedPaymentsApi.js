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
    define(['ApiClient', 'model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse', 'model/BulkPaymentEmbeddedAuthorisationRequest', 'model/PaymentEmbeddedAuthorisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse'), require('../model/BulkPaymentEmbeddedAuthorisationRequest'), require('../model/PaymentEmbeddedAuthorisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.EmbeddedPaymentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse, root.YapilyApi.BulkPaymentEmbeddedAuthorisationRequest, root.YapilyApi.PaymentEmbeddedAuthorisationRequest);
  }
}(this, function(ApiClient, ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse, BulkPaymentEmbeddedAuthorisationRequest, PaymentEmbeddedAuthorisationRequest) {
  'use strict';

  /**
   * EmbeddedPayments service.
   * @module api/EmbeddedPaymentsApi
   * @version 1.176.0
   */

  /**
   * Constructs a new EmbeddedPaymentsApi. 
   * @alias module:api/EmbeddedPaymentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createEmbeddedBulkPaymentAuthorisationUsingPOST operation.
     * @callback module:api/EmbeddedPaymentsApi~createEmbeddedBulkPaymentAuthorisationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate an embedded bulk payment for user to authorise
     * @param {module:model/BulkPaymentEmbeddedAuthorisationRequest} bulkPaymentEmbeddedAuthorisationRequest bulkPaymentEmbeddedAuthorisationRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/EmbeddedPaymentsApi~createEmbeddedBulkPaymentAuthorisationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse}
     */
    this.createEmbeddedBulkPaymentAuthorisationUsingPOST = function(bulkPaymentEmbeddedAuthorisationRequest, opts, callback) {
      opts = opts || {};
      var postBody = bulkPaymentEmbeddedAuthorisationRequest;
      // verify the required parameter 'bulkPaymentEmbeddedAuthorisationRequest' is set
      if (bulkPaymentEmbeddedAuthorisationRequest === undefined || bulkPaymentEmbeddedAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'bulkPaymentEmbeddedAuthorisationRequest' when calling createEmbeddedBulkPaymentAuthorisationUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/embedded-bulk-payment-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEmbeddedPaymentAuthorisationUsingPOST operation.
     * @callback module:api/EmbeddedPaymentsApi~createEmbeddedPaymentAuthorisationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate an embedded payment for user to authorise
     * @param {module:model/PaymentEmbeddedAuthorisationRequest} paymentAuthRequest paymentAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/EmbeddedPaymentsApi~createEmbeddedPaymentAuthorisationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse}
     */
    this.createEmbeddedPaymentAuthorisationUsingPOST = function(paymentAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = paymentAuthRequest;
      // verify the required parameter 'paymentAuthRequest' is set
      if (paymentAuthRequest === undefined || paymentAuthRequest === null) {
        throw new Error("Missing the required parameter 'paymentAuthRequest' when calling createEmbeddedPaymentAuthorisationUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/embedded-payment-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmbeddedBulkPaymentAuthorisationUsingPUT operation.
     * @callback module:api/EmbeddedPaymentsApi~updateEmbeddedBulkPaymentAuthorisationUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an embedded bulk payment initiation with SCA info
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {module:model/BulkPaymentEmbeddedAuthorisationRequest} bulkPaymentEmbeddedAuthorisationRequest bulkPaymentEmbeddedAuthorisationRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/EmbeddedPaymentsApi~updateEmbeddedBulkPaymentAuthorisationUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse}
     */
    this.updateEmbeddedBulkPaymentAuthorisationUsingPUT = function(consentId, bulkPaymentEmbeddedAuthorisationRequest, opts, callback) {
      opts = opts || {};
      var postBody = bulkPaymentEmbeddedAuthorisationRequest;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling updateEmbeddedBulkPaymentAuthorisationUsingPUT");
      }
      // verify the required parameter 'bulkPaymentEmbeddedAuthorisationRequest' is set
      if (bulkPaymentEmbeddedAuthorisationRequest === undefined || bulkPaymentEmbeddedAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'bulkPaymentEmbeddedAuthorisationRequest' when calling updateEmbeddedBulkPaymentAuthorisationUsingPUT");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/embedded-bulk-payment-auth-requests/{consentId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmbeddedPaymentAuthorisationUsingPUT operation.
     * @callback module:api/EmbeddedPaymentsApi~updateEmbeddedPaymentAuthorisationUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an embedded payment initiation with SCA info
     * @param {String} consentId __Mandatory__. The consent Id of the `Consent` to update.
     * @param {module:model/PaymentEmbeddedAuthorisationRequest} paymentAuthRequest paymentAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/EmbeddedPaymentsApi~updateEmbeddedPaymentAuthorisationUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse}
     */
    this.updateEmbeddedPaymentAuthorisationUsingPUT = function(consentId, paymentAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = paymentAuthRequest;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling updateEmbeddedPaymentAuthorisationUsingPUT");
      }
      // verify the required parameter 'paymentAuthRequest' is set
      if (paymentAuthRequest === undefined || paymentAuthRequest === null) {
        throw new Error("Missing the required parameter 'paymentAuthRequest' when calling updateEmbeddedPaymentAuthorisationUsingPUT");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/embedded-payment-auth-requests/{consentId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
