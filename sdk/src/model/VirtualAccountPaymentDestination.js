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

/**
 * The VirtualAccountPaymentDestination model module.
 * @module model/VirtualAccountPaymentDestination
 * @version 2.13.1
 */
class VirtualAccountPaymentDestination {
    /**
     * Constructs a new <code>VirtualAccountPaymentDestination</code>.
     * @alias module:model/VirtualAccountPaymentDestination
     * @param type {String} Type of destination for a payment. One of ACCOUNT, EXTERNAL or BENEFICIARY
     */
    constructor(type) { 
        
        VirtualAccountPaymentDestination.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>VirtualAccountPaymentDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountPaymentDestination} obj Optional instance to populate.
     * @return {module:model/VirtualAccountPaymentDestination} The populated <code>VirtualAccountPaymentDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountPaymentDestination();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountIdentifications')) {
                obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
            }
            if (data.hasOwnProperty('beneficiaryId')) {
                obj['beneficiaryId'] = ApiClient.convertToType(data['beneficiaryId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type of destination for a payment. One of ACCOUNT, EXTERNAL or BENEFICIARY
 * @member {String} type
 */
VirtualAccountPaymentDestination.prototype['type'] = undefined;

/**
 * Only present if type is ACCOUNT. Identifies the Virtual Account to which the payment was made
 * @member {String} accountId
 */
VirtualAccountPaymentDestination.prototype['accountId'] = undefined;

/**
 * Only present if type is EXTERNAL. The account identifications that identify an external destination
 * @member {Array.<module:model/AccountIdentification>} accountIdentifications
 */
VirtualAccountPaymentDestination.prototype['accountIdentifications'] = undefined;

/**
 * Only present if type is BENEFICIARY. Unique id of the beneficiary
 * @member {String} beneficiaryId
 */
VirtualAccountPaymentDestination.prototype['beneficiaryId'] = undefined;






export default VirtualAccountPaymentDestination;
