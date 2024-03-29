/**
 * Yapily API
 * The Yapily API enables connections between your application and users' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: support@yapily.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponseError from '../model/ApiResponseError';
import ApiResponseOfPaymentResponse from '../model/ApiResponseOfPaymentResponse';
import ApiResponseOfPaymentResponses from '../model/ApiResponseOfPaymentResponses';
import BulkPaymentRequest from '../model/BulkPaymentRequest';
import PaymentRequest from '../model/PaymentRequest';

/**
* Payments service.
* @module api/PaymentsApi
* @version 2.13.1
*/
export default class PaymentsApi {

    /**
    * Constructs a new PaymentsApi. 
    * @alias module:api/PaymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBulkPayment operation.
     * @callback module:api/PaymentsApi~createBulkPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Bulk Payment
     * Used to initiate a bulk payment after obtaining the user's authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {module:model/BulkPaymentRequest} bulkPaymentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {Boolean} opts.raw __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
     * @param {module:api/PaymentsApi~createBulkPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentResponse}
     */
    createBulkPayment(consent, bulkPaymentRequest, opts, callback) {
      opts = opts || {};
      let postBody = bulkPaymentRequest;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling createBulkPayment");
      }
      // verify the required parameter 'bulkPaymentRequest' is set
      if (bulkPaymentRequest === undefined || bulkPaymentRequest === null) {
        throw new Error("Missing the required parameter 'bulkPaymentRequest' when calling createBulkPayment");
      }

      let pathParams = {
      };
      let queryParams = {
        'raw': opts['raw']
      };
      let headerParams = {
        'consent': consent,
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfPaymentResponse;
      return this.apiClient.callApi(
        '/bulk-payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPayment operation.
     * @callback module:api/PaymentsApi~createPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Payment
     * Used to initiate a payment after obtaining the user's authorisation. <br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {module:model/PaymentRequest} paymentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {Boolean} opts.raw __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
     * @param {module:api/PaymentsApi~createPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentResponse}
     */
    createPayment(consent, paymentRequest, opts, callback) {
      opts = opts || {};
      let postBody = paymentRequest;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling createPayment");
      }
      // verify the required parameter 'paymentRequest' is set
      if (paymentRequest === undefined || paymentRequest === null) {
        throw new Error("Missing the required parameter 'paymentRequest' when calling createPayment");
      }

      let pathParams = {
      };
      let queryParams = {
        'raw': opts['raw']
      };
      let headerParams = {
        'consent': consent,
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfPaymentResponse;
      return this.apiClient.callApi(
        '/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayments operation.
     * @callback module:api/PaymentsApi~getPaymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentResponses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment Details
     * Used to get the payment details of a payment. This is most commonly used to check for any updates to the payment status. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * @param {String} paymentId __Mandatory__. The payment Id of the payment.
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuCorporateId __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {String} opts.psuIpAddress __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param {Boolean} opts.raw __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
     * @param {module:api/PaymentsApi~getPaymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentResponses}
     */
    getPayments(paymentId, consent, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPayments");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getPayments");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
        'raw': opts['raw']
      };
      let headerParams = {
        'consent': consent,
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfPaymentResponses;
      return this.apiClient.callApi(
        '/payments/{paymentId}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
