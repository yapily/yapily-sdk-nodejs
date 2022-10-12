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
import Identity from './Identity';
import RawResponse from './RawResponse';
import ResponseForwardedData from './ResponseForwardedData';
import ResponseMeta from './ResponseMeta';

/**
 * The ApiResponseOfIdentity model module.
 * @module model/ApiResponseOfIdentity
 * @version 2.13.1
 */
class ApiResponseOfIdentity {
    /**
     * Constructs a new <code>ApiResponseOfIdentity</code>.
     * @alias module:model/ApiResponseOfIdentity
     */
    constructor() { 
        
        ApiResponseOfIdentity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponseOfIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponseOfIdentity} obj Optional instance to populate.
     * @return {module:model/ApiResponseOfIdentity} The populated <code>ApiResponseOfIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponseOfIdentity();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Identity.constructFromObject(data['data']);
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
ApiResponseOfIdentity.prototype['meta'] = undefined;

/**
 * @member {module:model/Identity} data
 */
ApiResponseOfIdentity.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiResponseOfIdentity.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ResponseForwardedData>} forwardedData
 */
ApiResponseOfIdentity.prototype['forwardedData'] = undefined;

/**
 * @member {Array.<module:model/RawResponse>} raw
 */
ApiResponseOfIdentity.prototype['raw'] = undefined;

/**
 * @member {String} tracingId
 */
ApiResponseOfIdentity.prototype['tracingId'] = undefined;






export default ApiResponseOfIdentity;

