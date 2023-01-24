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
import FilterAndSort from './FilterAndSort';
import PaymentResponse from './PaymentResponse';

/**
 * The FilteredClientPayloadListPaymentResponse model module.
 * @module model/FilteredClientPayloadListPaymentResponse
 * @version 2.13.1
 */
class FilteredClientPayloadListPaymentResponse {
    /**
     * Constructs a new <code>FilteredClientPayloadListPaymentResponse</code>.
     * @alias module:model/FilteredClientPayloadListPaymentResponse
     */
    constructor() { 
        
        FilteredClientPayloadListPaymentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilteredClientPayloadListPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilteredClientPayloadListPaymentResponse} obj Optional instance to populate.
     * @return {module:model/FilteredClientPayloadListPaymentResponse} The populated <code>FilteredClientPayloadListPaymentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilteredClientPayloadListPaymentResponse();

            if (data.hasOwnProperty('apiCall')) {
                obj['apiCall'] = ApiClient.convertToType(data['apiCall'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentResponse]);
            }
            if (data.hasOwnProperty('nextCursorHash')) {
                obj['nextCursorHash'] = ApiClient.convertToType(data['nextCursorHash'], 'String');
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
            if (data.hasOwnProperty('pagingMap')) {
                obj['pagingMap'] = ApiClient.convertToType(data['pagingMap'], {'String': FilterAndSort});
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} apiCall
 */
FilteredClientPayloadListPaymentResponse.prototype['apiCall'] = undefined;

/**
 * @member {Array.<module:model/PaymentResponse>} data
 */
FilteredClientPayloadListPaymentResponse.prototype['data'] = undefined;

/**
 * @member {String} nextCursorHash
 */
FilteredClientPayloadListPaymentResponse.prototype['nextCursorHash'] = undefined;

/**
 * @member {String} nextLink
 */
FilteredClientPayloadListPaymentResponse.prototype['nextLink'] = undefined;

/**
 * @member {Object.<String, module:model/FilterAndSort>} pagingMap
 */
FilteredClientPayloadListPaymentResponse.prototype['pagingMap'] = undefined;

/**
 * @member {Number} totalCount
 */
FilteredClientPayloadListPaymentResponse.prototype['totalCount'] = undefined;






export default FilteredClientPayloadListPaymentResponse;
