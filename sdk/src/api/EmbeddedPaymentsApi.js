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
    define(['ApiClient', 'model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse', 'model/PaymentEmbeddedAuthorisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse'), require('../model/PaymentEmbeddedAuthorisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.EmbeddedPaymentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse, root.YapilyApi.PaymentEmbeddedAuthorisationRequest);
  }
}(this, function(ApiClient, ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse, PaymentEmbeddedAuthorisationRequest) {
  'use strict';

  /**
   * EmbeddedPayments service.
   * @module api/EmbeddedPaymentsApi
   * @version 0.0.318
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
     * @param {String} opts.psuId PSU ID
     * @param {String} opts.psuCorporateId PSU ID CORPORATE
     * @param {String} opts.psuIpAddress PSU IP ADDRESS
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
     * Callback function to receive the result of the updateEmbeddedPaymentAuthorisationUsingPUT operation.
     * @callback module:api/EmbeddedPaymentsApi~updateEmbeddedPaymentAuthorisationUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an embedded payment initiation with SCA info
     * @param {String} consentId consentId
     * @param {module:model/PaymentEmbeddedAuthorisationRequest} paymentAuthRequest paymentAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId PSU ID
     * @param {String} opts.psuCorporateId PSU ID CORPORATE
     * @param {String} opts.psuIpAddress PSU IP ADDRESS
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
