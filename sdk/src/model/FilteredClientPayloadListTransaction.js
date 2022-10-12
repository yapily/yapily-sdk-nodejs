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
import Transaction from './Transaction';

/**
 * The FilteredClientPayloadListTransaction model module.
 * @module model/FilteredClientPayloadListTransaction
 * @version 2.13.1
 */
class FilteredClientPayloadListTransaction {
    /**
     * Constructs a new <code>FilteredClientPayloadListTransaction</code>.
     * @alias module:model/FilteredClientPayloadListTransaction
     */
    constructor() { 
        
        FilteredClientPayloadListTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilteredClientPayloadListTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilteredClientPayloadListTransaction} obj Optional instance to populate.
     * @return {module:model/FilteredClientPayloadListTransaction} The populated <code>FilteredClientPayloadListTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilteredClientPayloadListTransaction();

            if (data.hasOwnProperty('apiCall')) {
                obj['apiCall'] = ApiClient.convertToType(data['apiCall'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Transaction]);
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
FilteredClientPayloadListTransaction.prototype['apiCall'] = undefined;

/**
 * @member {Array.<module:model/Transaction>} data
 */
FilteredClientPayloadListTransaction.prototype['data'] = undefined;

/**
 * @member {String} nextCursorHash
 */
FilteredClientPayloadListTransaction.prototype['nextCursorHash'] = undefined;

/**
 * @member {String} nextLink
 */
FilteredClientPayloadListTransaction.prototype['nextLink'] = undefined;

/**
 * @member {Object.<String, module:model/FilterAndSort>} pagingMap
 */
FilteredClientPayloadListTransaction.prototype['pagingMap'] = undefined;

/**
 * @member {Number} totalCount
 */
FilteredClientPayloadListTransaction.prototype['totalCount'] = undefined;






export default FilteredClientPayloadListTransaction;

