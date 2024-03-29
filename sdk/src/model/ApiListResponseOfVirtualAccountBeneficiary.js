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
import Links from './Links';
import ResponseForwardedData from './ResponseForwardedData';
import ResponseListMeta from './ResponseListMeta';
import VirtualAccountBeneficiary from './VirtualAccountBeneficiary';

/**
 * The ApiListResponseOfVirtualAccountBeneficiary model module.
 * @module model/ApiListResponseOfVirtualAccountBeneficiary
 * @version 2.13.1
 */
class ApiListResponseOfVirtualAccountBeneficiary {
    /**
     * Constructs a new <code>ApiListResponseOfVirtualAccountBeneficiary</code>.
     * @alias module:model/ApiListResponseOfVirtualAccountBeneficiary
     */
    constructor() { 
        
        ApiListResponseOfVirtualAccountBeneficiary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiListResponseOfVirtualAccountBeneficiary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiListResponseOfVirtualAccountBeneficiary} obj Optional instance to populate.
     * @return {module:model/ApiListResponseOfVirtualAccountBeneficiary} The populated <code>ApiListResponseOfVirtualAccountBeneficiary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiListResponseOfVirtualAccountBeneficiary();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseListMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [VirtualAccountBeneficiary]);
            }
            if (data.hasOwnProperty('forwardedData')) {
                obj['forwardedData'] = ApiClient.convertToType(data['forwardedData'], [ResponseForwardedData]);
            }
            if (data.hasOwnProperty('tracingId')) {
                obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseListMeta} meta
 */
ApiListResponseOfVirtualAccountBeneficiary.prototype['meta'] = undefined;

/**
 * @member {module:model/Links} links
 */
ApiListResponseOfVirtualAccountBeneficiary.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/VirtualAccountBeneficiary>} data
 */
ApiListResponseOfVirtualAccountBeneficiary.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/ResponseForwardedData>} forwardedData
 */
ApiListResponseOfVirtualAccountBeneficiary.prototype['forwardedData'] = undefined;

/**
 * @member {String} tracingId
 */
ApiListResponseOfVirtualAccountBeneficiary.prototype['tracingId'] = undefined;






export default ApiListResponseOfVirtualAccountBeneficiary;

