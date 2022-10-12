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
import ApiListResponseOfFeatureDetails from '../model/ApiListResponseOfFeatureDetails';
import ApiListResponseOfInstitution from '../model/ApiListResponseOfInstitution';
import ApiResponseError from '../model/ApiResponseError';
import Institution from '../model/Institution';

/**
* Institutions service.
* @module api/InstitutionsApi
* @version 2.13.1
*/
export default class InstitutionsApi {

    /**
    * Constructs a new InstitutionsApi. 
    * @alias module:api/InstitutionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFeatureDetails operation.
     * @callback module:api/InstitutionsApi~getFeatureDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfFeatureDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Features
     * Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.
     * @param {module:api/InstitutionsApi~getFeatureDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfFeatureDetails}
     */
    getFeatureDetails(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = ApiListResponseOfFeatureDetails;
      return this.apiClient.callApi(
        '/features', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstitution operation.
     * @callback module:api/InstitutionsApi~getInstitutionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Institution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Institution
     * Used to retrieves details of a specific `Institution` within an application
     * @param {String} institutionId __Mandatory__. The Yapily institution Id for the `Institution`.
     * @param {module:api/InstitutionsApi~getInstitutionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Institution}
     */
    getInstitution(institutionId, callback) {
      let postBody = null;
      // verify the required parameter 'institutionId' is set
      if (institutionId === undefined || institutionId === null) {
        throw new Error("Missing the required parameter 'institutionId' when calling getInstitution");
      }

      let pathParams = {
        'institutionId': institutionId
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
      let returnType = Institution;
      return this.apiClient.callApi(
        '/institutions/{institutionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstitutions operation.
     * @callback module:api/InstitutionsApi~getInstitutionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfInstitution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Institutions
     * Used to retrieve all `Institutions` within an application
     * @param {module:api/InstitutionsApi~getInstitutionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfInstitution}
     */
    getInstitutions(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = ApiListResponseOfInstitution;
      return this.apiClient.callApi(
        '/institutions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
