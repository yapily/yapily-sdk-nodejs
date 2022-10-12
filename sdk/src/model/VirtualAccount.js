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
import VirtualAccountBalance from './VirtualAccountBalance';
import VirtualAccountBankAccount from './VirtualAccountBankAccount';

/**
 * The VirtualAccount model module.
 * @module model/VirtualAccount
 * @version 2.13.1
 */
class VirtualAccount {
    /**
     * Constructs a new <code>VirtualAccount</code>.
     * @alias module:model/VirtualAccount
     */
    constructor() { 
        
        VirtualAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VirtualAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccount} obj Optional instance to populate.
     * @return {module:model/VirtualAccount} The populated <code>VirtualAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdDateTime')) {
                obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('balances')) {
                obj['balances'] = ApiClient.convertToType(data['balances'], [VirtualAccountBalance]);
            }
            if (data.hasOwnProperty('bankAccount')) {
                obj['bankAccount'] = VirtualAccountBankAccount.constructFromObject(data['bankAccount']);
            }
        }
        return obj;
    }


}

/**
 * Unique id of the account
 * @member {String} id
 */
VirtualAccount.prototype['id'] = undefined;

/**
 * Date and time that the account was created
 * @member {Date} createdDateTime
 */
VirtualAccount.prototype['createdDateTime'] = undefined;

/**
 * The current state of the Account <br> PENDING - Creation of the account is in progress <br> ACTIVE - The account is active and in use <br> FAILED - An issue occured during account creation <br> SUSPENDED - The account has been temporarily suspended by the account provider. It cannot currently be used <br> CLOSED - The account has been permanently closed and cannot be used
 * @member {String} status
 */
VirtualAccount.prototype['status'] = undefined;

/**
 * Reference that can be provided in order to help with identification of the account
 * @member {String} nickname
 */
VirtualAccount.prototype['nickname'] = undefined;

/**
 * Three-letter ISO 4217 currency code
 * @member {String} currency
 */
VirtualAccount.prototype['currency'] = undefined;

/**
 * @member {Array.<module:model/VirtualAccountBalance>} balances
 */
VirtualAccount.prototype['balances'] = undefined;

/**
 * @member {module:model/VirtualAccountBankAccount} bankAccount
 */
VirtualAccount.prototype['bankAccount'] = undefined;






export default VirtualAccount;

