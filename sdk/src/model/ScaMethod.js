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
import Type from './Type';

/**
 * The ScaMethod model module.
 * @module model/ScaMethod
 * @version 2.13.1
 */
class ScaMethod {
    /**
     * Constructs a new <code>ScaMethod</code>.
     * __Conditional__. Used to update the authorisation with the sca method of the user&#39;s choice for the &#x60;Institution&#x60; that uses the embedded authorisation flow. If the user has multiple sca methods configured, the &#x60;Institution&#x60; will allow the user to select from each of these options. &lt;br&gt;&lt;br&gt;When the user has multiple sca methods for the &#x60;Institution&#x60;, this is the second step required in the embedded authorisation flow to authorise the &#x60;Consent&#x60;.
     * @alias module:model/ScaMethod
     * @param id {String} __Mandatory__. The id of the sca method provided by the `Institution`
     */
    constructor(id) { 
        
        ScaMethod.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ScaMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScaMethod} obj Optional instance to populate.
     * @return {module:model/ScaMethod} The populated <code>ScaMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScaMethod();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = Type.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__. The id of the sca method provided by the `Institution`
 * @member {String} id
 */
ScaMethod.prototype['id'] = undefined;

/**
 * @member {module:model/Type} type
 */
ScaMethod.prototype['type'] = undefined;

/**
 * __Optional__. A description of the sca method if provided by the `Institution`
 * @member {String} description
 */
ScaMethod.prototype['description'] = undefined;






export default ScaMethod;

