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
 * The RedirectRequest model module.
 * @module model/RedirectRequest
 * @version 2.13.1
 */
class RedirectRequest {
    /**
     * Constructs a new <code>RedirectRequest</code>.
     * __Optional__. The server to redirect the user to after the user complete the authorisation at the &#x60;Institution&#x60;.
     * @alias module:model/RedirectRequest
     * @param url {String} __Mandatory__.Successful redirect after the user complete the authorisation at the `Institution`.
     */
    constructor(url) { 
        
        RedirectRequest.initialize(this, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url) { 
        obj['url'] = url;
    }

    /**
     * Constructs a <code>RedirectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedirectRequest} obj Optional instance to populate.
     * @return {module:model/RedirectRequest} The populated <code>RedirectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedirectRequest();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__.Successful redirect after the user complete the authorisation at the `Institution`.
 * @member {String} url
 */
RedirectRequest.prototype['url'] = undefined;






export default RedirectRequest;

