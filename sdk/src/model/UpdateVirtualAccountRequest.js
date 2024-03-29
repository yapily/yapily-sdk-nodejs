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
 * The UpdateVirtualAccountRequest model module.
 * @module model/UpdateVirtualAccountRequest
 * @version 2.13.1
 */
class UpdateVirtualAccountRequest {
    /**
     * Constructs a new <code>UpdateVirtualAccountRequest</code>.
     * @alias module:model/UpdateVirtualAccountRequest
     */
    constructor() { 
        
        UpdateVirtualAccountRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateVirtualAccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateVirtualAccountRequest} obj Optional instance to populate.
     * @return {module:model/UpdateVirtualAccountRequest} The populated <code>UpdateVirtualAccountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateVirtualAccountRequest();

            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * New reference that can be provided in order to help with identification of the account
 * @member {String} nickname
 */
UpdateVirtualAccountRequest.prototype['nickname'] = undefined;

/**
 * New state of the Account: CLOSED - The account has been permanently closed and cannot be used
 * @member {String} status
 */
UpdateVirtualAccountRequest.prototype['status'] = undefined;






export default UpdateVirtualAccountRequest;

