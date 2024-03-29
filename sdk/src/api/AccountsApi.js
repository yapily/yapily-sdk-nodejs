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
    define(['ApiClient', 'model/AccountAuthorisationRequest', 'model/ApiListResponseOfAccount', 'model/ApiListResponseOfPaymentResponse', 'model/ApiResponseOfAccount', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/ApiResponseOfListOfBeneficiary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountAuthorisationRequest'), require('../model/ApiListResponseOfAccount'), require('../model/ApiListResponseOfPaymentResponse'), require('../model/ApiResponseOfAccount'), require('../model/ApiResponseOfAuthorisationRequestResponse'), require('../model/ApiResponseOfListOfBeneficiary'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountAuthorisationRequest, root.YapilyApi.ApiListResponseOfAccount, root.YapilyApi.ApiListResponseOfPaymentResponse, root.YapilyApi.ApiResponseOfAccount, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse, root.YapilyApi.ApiResponseOfListOfBeneficiary);
  }
}(this, function(ApiClient, AccountAuthorisationRequest, ApiListResponseOfAccount, ApiListResponseOfPaymentResponse, ApiResponseOfAccount, ApiResponseOfAuthorisationRequestResponse, ApiResponseOfListOfBeneficiary) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 1.259.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAccountDirectDebitsUsingGET operation.
     * @callback module:api/AccountsApi~getAccountDirectDebitsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account direct debits
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {module:api/AccountsApi~getAccountDirectDebitsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfPaymentResponse}
     */
    this.getAccountDirectDebitsUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountDirectDebitsUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountDirectDebitsUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = ApiListResponseOfPaymentResponse;
      return this.apiClient.callApi(
        '/accounts/{accountId}/direct-debits', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountPeriodicPaymentsUsingGET operation.
     * @callback module:api/AccountsApi~getAccountPeriodicPaymentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account payments detail
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {module:api/AccountsApi~getAccountPeriodicPaymentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfPaymentResponse}
     */
    this.getAccountPeriodicPaymentsUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountPeriodicPaymentsUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountPeriodicPaymentsUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = ApiListResponseOfPaymentResponse;
      return this.apiClient.callApi(
        '/accounts/{accountId}/periodic-payments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountScheduledPaymentsUsingGET operation.
     * @callback module:api/AccountsApi~getAccountScheduledPaymentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account scheduled payments
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {Number} opts.limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param {module:api/AccountsApi~getAccountScheduledPaymentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfPaymentResponse}
     */
    this.getAccountScheduledPaymentsUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountScheduledPaymentsUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountScheduledPaymentsUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = ApiListResponseOfPaymentResponse;
      return this.apiClient.callApi(
        '/accounts/{accountId}/scheduled-payments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountUsingGET operation.
     * @callback module:api/AccountsApi~getAccountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/AccountsApi~getAccountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAccount}
     */
    this.getAccountUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'consent': consent,
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAccount;
      return this.apiClient.callApi(
        '/accounts/{accountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountsUsingGET operation.
     * @callback module:api/AccountsApi~getAccountsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get accounts
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/AccountsApi~getAccountsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfAccount}
     */
    this.getAccountsUsingGET = function(consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountsUsingGET");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
      var returnType = ApiListResponseOfAccount;
      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBeneficiariesUsingGET operation.
     * @callback module:api/AccountsApi~getBeneficiariesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfListOfBeneficiary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Beneficiaries
     * @param {String} accountId __Mandatory__. The account Id of the user's bank account.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {module:api/AccountsApi~getBeneficiariesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfListOfBeneficiary}
     */
    this.getBeneficiariesUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBeneficiariesUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getBeneficiariesUsingGET");
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
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfListOfBeneficiary;
      return this.apiClient.callApi(
        '/accounts/{accountId}/beneficiaries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateAccountRequestUsingPOST operation.
     * @callback module:api/AccountsApi~initiateAccountRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate a new account request for user to authorize
     * @param {module:model/AccountAuthorisationRequest} accountAuthRequest accountAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/AccountsApi~initiateAccountRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.initiateAccountRequestUsingPOST = function(accountAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = accountAuthRequest;
      // verify the required parameter 'accountAuthRequest' is set
      if (accountAuthRequest === undefined || accountAuthRequest === null) {
        throw new Error("Missing the required parameter 'accountAuthRequest' when calling initiateAccountRequestUsingPOST");
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
      var returnType = ApiResponseOfAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/account-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reAuthoriseAccountUsingPATCH operation.
     * @callback module:api/AccountsApi~reAuthoriseAccountUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Re-authorise account request
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/AccountsApi~reAuthoriseAccountUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.reAuthoriseAccountUsingPATCH = function(consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling reAuthoriseAccountUsingPATCH");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
      var returnType = ApiResponseOfAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/account-auth-requests', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePreAuthoriseAccountConsentUsingPUT operation.
     * @callback module:api/AccountsApi~updatePreAuthoriseAccountConsentUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pre authorize consent for user to authorise account
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {module:model/AccountAuthorisationRequest} accountAuthRequest accountAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param {module:api/AccountsApi~updatePreAuthoriseAccountConsentUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.updatePreAuthoriseAccountConsentUsingPUT = function(consent, accountAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = accountAuthRequest;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling updatePreAuthoriseAccountConsentUsingPUT");
      }
      // verify the required parameter 'accountAuthRequest' is set
      if (accountAuthRequest === undefined || accountAuthRequest === null) {
        throw new Error("Missing the required parameter 'accountAuthRequest' when calling updatePreAuthoriseAccountConsentUsingPUT");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/account-auth-requests', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
