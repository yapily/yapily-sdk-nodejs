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
import SortEnum from './SortEnum';

/**
 * The FilterAndSort model module.
 * @module model/FilterAndSort
 * @version 2.13.1
 */
class FilterAndSort {
    /**
     * Constructs a new <code>FilterAndSort</code>.
     * @alias module:model/FilterAndSort
     */
    constructor() { 
        
        FilterAndSort.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterAndSort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterAndSort} obj Optional instance to populate.
     * @return {module:model/FilterAndSort} The populated <code>FilterAndSort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterAndSort();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('before')) {
                obj['before'] = ApiClient.convertToType(data['before'], 'Date');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = SortEnum.constructFromObject(data['sort']);
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('cursor')) {
                obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} from
 */
FilterAndSort.prototype['from'] = undefined;

/**
 * @member {Date} before
 */
FilterAndSort.prototype['before'] = undefined;

/**
 * @member {Number} limit
 */
FilterAndSort.prototype['limit'] = undefined;

/**
 * @member {module:model/SortEnum} sort
 */
FilterAndSort.prototype['sort'] = undefined;

/**
 * @member {Number} offset
 */
FilterAndSort.prototype['offset'] = undefined;

/**
 * @member {String} cursor
 */
FilterAndSort.prototype['cursor'] = undefined;






export default FilterAndSort;

