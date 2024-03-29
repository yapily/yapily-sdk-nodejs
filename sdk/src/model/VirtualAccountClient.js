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
import VirtualAccountClientStatus from './VirtualAccountClientStatus';
import VirtualAccountClientType from './VirtualAccountClientType';
import VirtualAccountIndividualClient from './VirtualAccountIndividualClient';
import VirtualAccountKycStatus from './VirtualAccountKycStatus';

/**
 * The VirtualAccountClient model module.
 * @module model/VirtualAccountClient
 * @version 2.13.1
 */
class VirtualAccountClient {
    /**
     * Constructs a new <code>VirtualAccountClient</code>.
     * @alias module:model/VirtualAccountClient
     */
    constructor() { 
        
        VirtualAccountClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VirtualAccountClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualAccountClient} obj Optional instance to populate.
     * @return {module:model/VirtualAccountClient} The populated <code>VirtualAccountClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualAccountClient();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = VirtualAccountClientType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('kycStatus')) {
                obj['kycStatus'] = VirtualAccountKycStatus.constructFromObject(data['kycStatus']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = VirtualAccountClientStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('createdDateTime')) {
                obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'Date');
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
 * The id generated in the on-boarding process, it will be used as client-id for virtual accounts request
 * @member {String} id
 */
VirtualAccountClient.prototype['id'] = undefined;

/**
 * @member {module:model/VirtualAccountClientType} type
 */
VirtualAccountClient.prototype['type'] = undefined;

/**
 * @member {module:model/VirtualAccountKycStatus} kycStatus
 */
VirtualAccountClient.prototype['kycStatus'] = undefined;

/**
 * @member {module:model/VirtualAccountClientStatus} status
 */
VirtualAccountClient.prototype['status'] = undefined;

/**
 * @member {Date} createdDateTime
 */
VirtualAccountClient.prototype['createdDateTime'] = undefined;

/**
 * @member {module:model/VirtualAccountIndividualClient} individual
 */
VirtualAccountClient.prototype['individual'] = undefined;

/**
 * @member {module:model/VirtualAccountBusinessClient} business
 */
VirtualAccountClient.prototype['business'] = undefined;






export default VirtualAccountClient;

