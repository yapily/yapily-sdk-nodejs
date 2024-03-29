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
import ApiErrorResponse from '../model/ApiErrorResponse';
import ApiResponseOfFundsConfirmationResponse from '../model/ApiResponseOfFundsConfirmationResponse';
import ApiResponseOfNonSweepingAuthorisationResponse from '../model/ApiResponseOfNonSweepingAuthorisationResponse';
import ApiResponseOfSubmissionResponse from '../model/ApiResponseOfSubmissionResponse';
import ApiResponseOfSweepingAuthorisationResponse from '../model/ApiResponseOfSweepingAuthorisationResponse';
import FundsConfirmationRequest from '../model/FundsConfirmationRequest';
import NonSweepingAuthorisationRequest from '../model/NonSweepingAuthorisationRequest';
import SubmissionRequest from '../model/SubmissionRequest';
import SweepingAuthorisationRequest from '../model/SweepingAuthorisationRequest';

/**
* VariableRecurringPayments service.
* @module api/VariableRecurringPaymentsApi
* @version 2.13.1
*/
export default class VariableRecurringPaymentsApi {

    /**
    * Constructs a new VariableRecurringPaymentsApi. 
    * @alias module:api/VariableRecurringPaymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNonSweepingAuthorisation operation.
     * @callback module:api/VariableRecurringPaymentsApi~createNonSweepingAuthorisationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfNonSweepingAuthorisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * @param {module:model/NonSweepingAuthorisationRequest} nonSweepingAuthorisationRequest 
     * @param {module:api/VariableRecurringPaymentsApi~createNonSweepingAuthorisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfNonSweepingAuthorisationResponse}
     */
    createNonSweepingAuthorisation(nonSweepingAuthorisationRequest, callback) {
      let postBody = nonSweepingAuthorisationRequest;
      // verify the required parameter 'nonSweepingAuthorisationRequest' is set
      if (nonSweepingAuthorisationRequest === undefined || nonSweepingAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'nonSweepingAuthorisationRequest' when calling createNonSweepingAuthorisation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfNonSweepingAuthorisationResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/non-sweeping/consents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSweepingAuthorisation operation.
     * @callback module:api/VariableRecurringPaymentsApi~createSweepingAuthorisationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfSweepingAuthorisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Sweeping Variable Recurring Payment Authorisation
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * @param {module:model/SweepingAuthorisationRequest} sweepingAuthorisationRequest 
     * @param {module:api/VariableRecurringPaymentsApi~createSweepingAuthorisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfSweepingAuthorisationResponse}
     */
    createSweepingAuthorisation(sweepingAuthorisationRequest, callback) {
      let postBody = sweepingAuthorisationRequest;
      // verify the required parameter 'sweepingAuthorisationRequest' is set
      if (sweepingAuthorisationRequest === undefined || sweepingAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'sweepingAuthorisationRequest' when calling createSweepingAuthorisation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfSweepingAuthorisationResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/sweeping/consents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createVrpFundsConfirmation operation.
     * @callback module:api/VariableRecurringPaymentsApi~createVrpFundsConfirmationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfFundsConfirmationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm Funds for Variable Recurring Payment
     * Used to confirm funds on the Payer account to execute Variable Recurring Payments after obtaining the user's authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {module:model/FundsConfirmationRequest} fundsConfirmationRequest 
     * @param {module:api/VariableRecurringPaymentsApi~createVrpFundsConfirmationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfFundsConfirmationResponse}
     */
    createVrpFundsConfirmation(consent, fundsConfirmationRequest, callback) {
      let postBody = fundsConfirmationRequest;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling createVrpFundsConfirmation");
      }
      // verify the required parameter 'fundsConfirmationRequest' is set
      if (fundsConfirmationRequest === undefined || fundsConfirmationRequest === null) {
        throw new Error("Missing the required parameter 'fundsConfirmationRequest' when calling createVrpFundsConfirmation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'consent': consent
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfFundsConfirmationResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/funds-confirmation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createVrpPayment operation.
     * @callback module:api/VariableRecurringPaymentsApi~createVrpPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfSubmissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Variable Recurring Payment
     * Used to submit a Variable Recurring Payments transaction after obtaining the user's authorisation. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * @param {String} consent __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
     * @param {module:model/SubmissionRequest} submissionRequest 
     * @param {module:api/VariableRecurringPaymentsApi~createVrpPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfSubmissionResponse}
     */
    createVrpPayment(consent, submissionRequest, callback) {
      let postBody = submissionRequest;
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling createVrpPayment");
      }
      // verify the required parameter 'submissionRequest' is set
      if (submissionRequest === undefined || submissionRequest === null) {
        throw new Error("Missing the required parameter 'submissionRequest' when calling createVrpPayment");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'consent': consent
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfSubmissionResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSweepingVrpConsentById operation.
     * @callback module:api/VariableRecurringPaymentsApi~getSweepingVrpConsentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfSweepingAuthorisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sweeping Variable Recurring Payment Consent Details
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * @param {String} consentId __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
     * @param {module:api/VariableRecurringPaymentsApi~getSweepingVrpConsentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfSweepingAuthorisationResponse}
     */
    getSweepingVrpConsentById(consentId, callback) {
      let postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getSweepingVrpConsentById");
      }

      let pathParams = {
        'consentId': consentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfSweepingAuthorisationResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/sweeping/consents/{consentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVrpPaymentDetails operation.
     * @callback module:api/VariableRecurringPaymentsApi~getVrpPaymentDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfSubmissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Recurring Payment Details
     * Get Variable Recurring Payment details using the Payment Id
     * @param {String} paymentId __Mandatory__. The Payment Id of the `Variable Recurring Payments` to retrieve.
     * @param {String} consent __Mandatory__. The consent token containing the user's authorisation to make the `Variable Recurring Payments` request.
     * @param {module:api/VariableRecurringPaymentsApi~getVrpPaymentDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfSubmissionResponse}
     */
    getVrpPaymentDetails(paymentId, consent, callback) {
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getVrpPaymentDetails");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getVrpPaymentDetails");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
        'consent': consent
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfSubmissionResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/payments/{paymentId}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getpNonSweepingVrpConsentById operation.
     * @callback module:api/VariableRecurringPaymentsApi~getpNonSweepingVrpConsentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfNonSweepingAuthorisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * @param {String} consentId __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
     * @param {module:api/VariableRecurringPaymentsApi~getpNonSweepingVrpConsentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfNonSweepingAuthorisationResponse}
     */
    getpNonSweepingVrpConsentById(consentId, callback) {
      let postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getpNonSweepingVrpConsentById");
      }

      let pathParams = {
        'consentId': consentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfNonSweepingAuthorisationResponse;
      return this.apiClient.callApi(
        '/variable-recurring-payments/non-sweeping/consents/{consentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
