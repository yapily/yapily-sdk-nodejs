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
import Pagination from './Pagination';

/**
 * The ResponseListMeta model module.
 * @module model/ResponseListMeta
 * @version 2.13.1
 */
class ResponseListMeta {
    /**
     * Constructs a new <code>ResponseListMeta</code>.
     * @alias module:model/ResponseListMeta
     */
    constructor() { 
        
        ResponseListMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseListMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseListMeta} obj Optional instance to populate.
     * @return {module:model/ResponseListMeta} The populated <code>ResponseListMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseListMeta();

            if (data.hasOwnProperty('tracingId')) {
                obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} tracingId
 */
ResponseListMeta.prototype['tracingId'] = undefined;

/**
 * @member {Number} count
 */
ResponseListMeta.prototype['count'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ResponseListMeta.prototype['pagination'] = undefined;






export default ResponseListMeta;

