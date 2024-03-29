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
import VirtualAccountAddress from './VirtualAccountAddress';
import VirtualAccountClientBusinessType from './VirtualAccountClientBusinessType';

/**
 * The VirtualAccountBusinessClient model module.
 * @module model/VirtualAccountBusinessClient
 * @version 2.13.1
 */
class VirtualAccountBusinessClient {
    /**
     * Constructs a new <code>VirtualAccountBusinessClient</code>.
     * @alias module:model/VirtualAccountBusinessClient
     * @param name {String} 
     * @param type {module:model/VirtualAccountClientBusinessType} 
     * @param registrationNumber {String} 
     * @param registeredAddress {module:model/VirtualAccountAddress} 
     * @param contactName {String} 
     * @param email {String} 
     * @param phone {String} 
     */
    constructor(name, type, registrationNumber, registeredAddress, contactName, email, phone) { 
        
        VirtualAccountBusinessClient.initialize(this, name, type, registrationNumber, registeredAddress, contactName, email, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, registrationNumber, registeredAddress, contactName, email, phone) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['registrationNumber'] = registrationNumber;
        obj['registeredAddress'] = registeredAddress;
        obj['contactName'] = contactName;
        obj['email'] = email;
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>VirtualAccountBusinessClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountBusinessClient} obj Optional instance to populate.
     * @return {module:model/VirtualAccountBusinessClient} The populated <code>VirtualAccountBusinessClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountBusinessClient();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = VirtualAccountClientBusinessType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('registrationNumber')) {
                obj['registrationNumber'] = ApiClient.convertToType(data['registrationNumber'], 'String');
            }
            if (data.hasOwnProperty('registeredAddress')) {
                obj['registeredAddress'] = VirtualAccountAddress.constructFromObject(data['registeredAddress']);
            }
            if (data.hasOwnProperty('tradingAddress')) {
                obj['tradingAddress'] = VirtualAccountAddress.constructFromObject(data['tradingAddress']);
            }
            if (data.hasOwnProperty('contactName')) {
                obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
VirtualAccountBusinessClient.prototype['name'] = undefined;

/**
 * @member {module:model/VirtualAccountClientBusinessType} type
 */
VirtualAccountBusinessClient.prototype['type'] = undefined;

/**
 * @member {String} registrationNumber
 */
VirtualAccountBusinessClient.prototype['registrationNumber'] = undefined;

/**
 * @member {module:model/VirtualAccountAddress} registeredAddress
 */
VirtualAccountBusinessClient.prototype['registeredAddress'] = undefined;

/**
 * @member {module:model/VirtualAccountAddress} tradingAddress
 */
VirtualAccountBusinessClient.prototype['tradingAddress'] = undefined;

/**
 * @member {String} contactName
 */
VirtualAccountBusinessClient.prototype['contactName'] = undefined;

/**
 * @member {String} email
 */
VirtualAccountBusinessClient.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
VirtualAccountBusinessClient.prototype['phone'] = undefined;






export default VirtualAccountBusinessClient;

