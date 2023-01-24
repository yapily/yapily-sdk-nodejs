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
import Amount from './Amount';
import VirtualAccountBalanceType from './VirtualAccountBalanceType';

/**
 * The VirtualAccountBalance model module.
 * @module model/VirtualAccountBalance
 * @version 2.13.1
 */
class VirtualAccountBalance {
    /**
     * Constructs a new <code>VirtualAccountBalance</code>.
     * @alias module:model/VirtualAccountBalance
     */
    constructor() { 
        
        VirtualAccountBalance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VirtualAccountBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountBalance} obj Optional instance to populate.
     * @return {module:model/VirtualAccountBalance} The populated <code>VirtualAccountBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountBalance();

            if (data.hasOwnProperty('type')) {
                obj['type'] = VirtualAccountBalanceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('balanceAmount')) {
                obj['balanceAmount'] = Amount.constructFromObject(data['balanceAmount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VirtualAccountBalanceType} type
 */
VirtualAccountBalance.prototype['type'] = undefined;

/**
 * @member {module:model/Amount} balanceAmount
 */
VirtualAccountBalance.prototype['balanceAmount'] = undefined;






export default VirtualAccountBalance;
