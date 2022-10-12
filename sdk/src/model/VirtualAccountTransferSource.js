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
 * The VirtualAccountTransferSource model module.
 * @module model/VirtualAccountTransferSource
 * @version 2.13.1
 */
class VirtualAccountTransferSource {
    /**
     * Constructs a new <code>VirtualAccountTransferSource</code>.
     * @alias module:model/VirtualAccountTransferSource
     * @param accountId {String} Identifies the Virtual Account from which the transfer was made
     */
    constructor(accountId) { 
        
        VirtualAccountTransferSource.initialize(this, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId) { 
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>VirtualAccountTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountTransferSource} obj Optional instance to populate.
     * @return {module:model/VirtualAccountTransferSource} The populated <code>VirtualAccountTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountTransferSource();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifies the Virtual Account from which the transfer was made
 * @member {String} accountId
 */
VirtualAccountTransferSource.prototype['accountId'] = undefined;






export default VirtualAccountTransferSource;

