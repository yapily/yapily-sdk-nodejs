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
 * The VirtualAccountAddress model module.
 * @module model/VirtualAccountAddress
 * @version 2.13.1
 */
class VirtualAccountAddress {
    /**
     * Constructs a new <code>VirtualAccountAddress</code>.
     * @alias module:model/VirtualAccountAddress
     * @param addressLine1 {String} __Mandatory__. AddressLine1 of the sub-client
     * @param townName {String} __Mandatory__. Town name of the sub-client
     * @param country {String} __Optional__. Country of the sub-client
     */
    constructor(addressLine1, townName, country) { 
        
        VirtualAccountAddress.initialize(this, addressLine1, townName, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addressLine1, townName, country) { 
        obj['addressLine1'] = addressLine1;
        obj['townName'] = townName;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>VirtualAccountAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountAddress} obj Optional instance to populate.
     * @return {module:model/VirtualAccountAddress} The populated <code>VirtualAccountAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountAddress();

            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('townName')) {
                obj['townName'] = ApiClient.convertToType(data['townName'], 'String');
            }
            if (data.hasOwnProperty('postCode')) {
                obj['postCode'] = ApiClient.convertToType(data['postCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__. AddressLine1 of the sub-client
 * @member {String} addressLine1
 */
VirtualAccountAddress.prototype['addressLine1'] = undefined;

/**
 * __Optional__. AddressLine2 of the sub-client
 * @member {String} addressLine2
 */
VirtualAccountAddress.prototype['addressLine2'] = undefined;

/**
 * __Mandatory__. Town name of the sub-client
 * @member {String} townName
 */
VirtualAccountAddress.prototype['townName'] = undefined;

/**
 * __Optional__. Address postcode of the sub-client
 * @member {String} postCode
 */
VirtualAccountAddress.prototype['postCode'] = undefined;

/**
 * __Optional__. Country of the sub-client
 * @member {String} country
 */
VirtualAccountAddress.prototype['country'] = undefined;






export default VirtualAccountAddress;

