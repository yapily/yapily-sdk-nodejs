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

import ApiClient from '../ApiClient';
import AccountAuthorisationResponse from './AccountAuthorisationResponse';
import RawResponse from './RawResponse';
import ResponseForwardedData from './ResponseForwardedData';
import ResponseMeta from './ResponseMeta';

/**
 * The ApiResponseOfAccountAuthorisationResponse model module.
 * @module model/ApiResponseOfAccountAuthorisationResponse
 * @version 2.13.1
 */
class ApiResponseOfAccountAuthorisationResponse {
    /**
     * Constructs a new <code>ApiResponseOfAccountAuthorisationResponse</code>.
     * @alias module:model/ApiResponseOfAccountAuthorisationResponse
     */
    constructor() { 
        
        ApiResponseOfAccountAuthorisationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponseOfAccountAuthorisationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponseOfAccountAuthorisationResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponseOfAccountAuthorisationResponse} The populated <code>ApiResponseOfAccountAuthorisationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponseOfAccountAuthorisationResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = AccountAuthorisationResponse.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
            if (data.hasOwnProperty('forwardedData')) {
                obj['forwardedData'] = ApiClient.convertToType(data['forwardedData'], [ResponseForwardedData]);
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], [RawResponse]);
            }
            if (data.hasOwnProperty('tracingId')) {
                obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseMeta} meta
 */
ApiResponseOfAccountAuthorisationResponse.prototype['meta'] = undefined;

/**
 * @member {module:model/AccountAuthorisationResponse} data
 */
ApiResponseOfAccountAuthorisationResponse.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiResponseOfAccountAuthorisationResponse.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ResponseForwardedData>} forwardedData
 */
ApiResponseOfAccountAuthorisationResponse.prototype['forwardedData'] = undefined;

/**
 * @member {Array.<module:model/RawResponse>} raw
 */
ApiResponseOfAccountAuthorisationResponse.prototype['raw'] = undefined;

/**
 * @member {String} tracingId
 */
ApiResponseOfAccountAuthorisationResponse.prototype['tracingId'] = undefined;






export default ApiResponseOfAccountAuthorisationResponse;

