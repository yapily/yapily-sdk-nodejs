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
import VirtualAccountBusinessClient from './VirtualAccountBusinessClient';
import VirtualAccountClientType from './VirtualAccountClientType';
import VirtualAccountIndividualClient from './VirtualAccountIndividualClient';

/**
 * The VirtualAccountClientRequest model module.
 * @module model/VirtualAccountClientRequest
 * @version 2.13.1
 */
class VirtualAccountClientRequest {
    /**
     * Constructs a new <code>VirtualAccountClientRequest</code>.
     * @alias module:model/VirtualAccountClientRequest
     * @param type {module:model/VirtualAccountClientType} 
     */
    constructor(type) { 
        
        VirtualAccountClientRequest.initialize(this, type);
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
     * Constructs a <code>VirtualAccountClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountClientRequest} obj Optional instance to populate.
     * @return {module:model/VirtualAccountClientRequest} The populated <code>VirtualAccountClientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountClientRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = VirtualAccountClientType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('individual')) {
                obj['individual'] = VirtualAccountIndividualClient.constructFromObject(data['individual']);
            }
            if (data.hasOwnProperty('business')) {
                obj['business'] = VirtualAccountBusinessClient.constructFromObject(data['business']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VirtualAccountClientType} type
 */
VirtualAccountClientRequest.prototype['type'] = undefined;

/**
 * @member {module:model/VirtualAccountIndividualClient} individual
 */
VirtualAccountClientRequest.prototype['individual'] = undefined;

/**
 * @member {module:model/VirtualAccountBusinessClient} business
 */
VirtualAccountClientRequest.prototype['business'] = undefined;






export default VirtualAccountClientRequest;

