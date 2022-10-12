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
import AccountIdentification from './AccountIdentification';
import Address from './Address';

/**
 * The Payee model module.
 * @module model/Payee
 * @version 2.13.1
 */
class Payee {
    /**
     * Constructs a new <code>Payee</code>.
     * __Mandatory__. The &#x60;Payee&#x60; object contains details of the beneficiary [person or business]. You must define this in your payment request alongwith all of the nested mandatory properties.
     * @alias module:model/Payee
     * @param name {String} __Mandatory__. The account holder name of the beneficiary.
     * @param accountIdentifications {Array.<module:model/AccountIdentification>} __Mandatory__. The account identifications that identify the `Payee` bank account.
     */
    constructor(name, accountIdentifications) { 
        
        Payee.initialize(this, name, accountIdentifications);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, accountIdentifications) { 
        obj['name'] = name;
        obj['accountIdentifications'] = accountIdentifications;
    }

    /**
     * Constructs a <code>Payee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payee} obj Optional instance to populate.
     * @return {module:model/Payee} The populated <code>Payee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Payee();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('accountIdentifications')) {
                obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('merchantCategoryCode')) {
                obj['merchantCategoryCode'] = ApiClient.convertToType(data['merchantCategoryCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__. The account holder name of the beneficiary.
 * @member {String} name
 */
Payee.prototype['name'] = undefined;

/**
 * __Mandatory__. The account identifications that identify the `Payee` bank account.
 * @member {Array.<module:model/AccountIdentification>} accountIdentifications
 */
Payee.prototype['accountIdentifications'] = undefined;

/**
 * @member {module:model/Address} address
 */
Payee.prototype['address'] = undefined;

/**
 * __Optional__. The merchant ID is a unique code provided by the payment processor to the merchant.
 * @member {String} merchantId
 */
Payee.prototype['merchantId'] = undefined;

/**
 * __Optional__. The category code of the merchant in case the `Payee` is a business.
 * @member {String} merchantCategoryCode
 */
Payee.prototype['merchantCategoryCode'] = undefined;






export default Payee;

