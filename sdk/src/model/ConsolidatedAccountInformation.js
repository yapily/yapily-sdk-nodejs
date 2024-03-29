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
import AccountBalance from './AccountBalance';

/**
 * The ConsolidatedAccountInformation model module.
 * @module model/ConsolidatedAccountInformation
 * @version 2.13.1
 */
class ConsolidatedAccountInformation {
    /**
     * Constructs a new <code>ConsolidatedAccountInformation</code>.
     * Summary information regarding account balances of the overall account provided by the bank
     * @alias module:model/ConsolidatedAccountInformation
     */
    constructor() { 
        
        ConsolidatedAccountInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConsolidatedAccountInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsolidatedAccountInformation} obj Optional instance to populate.
     * @return {module:model/ConsolidatedAccountInformation} The populated <code>ConsolidatedAccountInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsolidatedAccountInformation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('accountBalances')) {
                obj['accountBalances'] = ApiClient.convertToType(data['accountBalances'], [AccountBalance]);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the consolidated account. When used in Get Account Transactions calls, the transactions between the sub-accounts will not be reported
 * @member {String} id
 */
ConsolidatedAccountInformation.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/AccountBalance>} accountBalances
 */
ConsolidatedAccountInformation.prototype['accountBalances'] = undefined;






export default ConsolidatedAccountInformation;

