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
 * The VirtualAccountTransferDestination model module.
 * @module model/VirtualAccountTransferDestination
 * @version 2.13.1
 */
class VirtualAccountTransferDestination {
    /**
     * Constructs a new <code>VirtualAccountTransferDestination</code>.
     * @alias module:model/VirtualAccountTransferDestination
     * @param accountId {String} Identifies the Virtual Account to which the transfer was made
     */
    constructor(accountId) { 
        
        VirtualAccountTransferDestination.initialize(this, accountId);
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
     * Constructs a <code>VirtualAccountTransferDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountTransferDestination} obj Optional instance to populate.
     * @return {module:model/VirtualAccountTransferDestination} The populated <code>VirtualAccountTransferDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountTransferDestination();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifies the Virtual Account to which the transfer was made
 * @member {String} accountId
 */
VirtualAccountTransferDestination.prototype['accountId'] = undefined;






export default VirtualAccountTransferDestination;

