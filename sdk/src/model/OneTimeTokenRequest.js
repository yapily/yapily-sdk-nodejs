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
 * The OneTimeTokenRequest model module.
 * @module model/OneTimeTokenRequest
 * @version 2.13.1
 */
class OneTimeTokenRequest {
    /**
     * Constructs a new <code>OneTimeTokenRequest</code>.
     * The request body containing the &#x60;OneTimeTokenRequest&#x60; json payload
     * @alias module:model/OneTimeTokenRequest
     * @param oneTimeToken {String} __Mandatory__. The one time token to exchange for a consent token.
     */
    constructor(oneTimeToken) { 
        
        OneTimeTokenRequest.initialize(this, oneTimeToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, oneTimeToken) { 
        obj['oneTimeToken'] = oneTimeToken;
    }

    /**
     * Constructs a <code>OneTimeTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OneTimeTokenRequest} obj Optional instance to populate.
     * @return {module:model/OneTimeTokenRequest} The populated <code>OneTimeTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OneTimeTokenRequest();

            if (data.hasOwnProperty('oneTimeToken')) {
                obj['oneTimeToken'] = ApiClient.convertToType(data['oneTimeToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__. The one time token to exchange for a consent token.
 * @member {String} oneTimeToken
 */
OneTimeTokenRequest.prototype['oneTimeToken'] = undefined;






export default OneTimeTokenRequest;

