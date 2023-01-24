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

/**
 * The RawRequest model module.
 * @module model/RawRequest
 * @version 2.13.1
 */
class RawRequest {
    /**
     * Constructs a new <code>RawRequest</code>.
     * @alias module:model/RawRequest
     */
    constructor() { 
        
        RawRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RawRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawRequest} obj Optional instance to populate.
     * @return {module:model/RawRequest} The populated <code>RawRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawRequest();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('requestInstant')) {
                obj['requestInstant'] = ApiClient.convertToType(data['requestInstant'], 'Date');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], Object);
            }
            if (data.hasOwnProperty('bodyParameters')) {
                obj['bodyParameters'] = ApiClient.convertToType(data['bodyParameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('startedAt')) {
                obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} method
 */
RawRequest.prototype['method'] = undefined;

/**
 * @member {String} url
 */
RawRequest.prototype['url'] = undefined;

/**
 * @member {Date} requestInstant
 */
RawRequest.prototype['requestInstant'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
RawRequest.prototype['headers'] = undefined;

/**
 * @member {Object} body
 */
RawRequest.prototype['body'] = undefined;

/**
 * @member {Object.<String, String>} bodyParameters
 */
RawRequest.prototype['bodyParameters'] = undefined;

/**
 * @member {Date} startTime
 */
RawRequest.prototype['startTime'] = undefined;

/**
 * @member {Date} startedAt
 */
RawRequest.prototype['startedAt'] = undefined;






export default RawRequest;
