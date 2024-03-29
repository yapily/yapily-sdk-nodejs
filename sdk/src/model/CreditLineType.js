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
* Enum class CreditLineType.
* @enum {}
* @readonly
*/
export default class CreditLineType {
    
        /**
         * value: "AVAILABLE"
         * @const
         */
        "AVAILABLE" = "AVAILABLE";

    
        /**
         * value: "CREDIT"
         * @const
         */
        "CREDIT" = "CREDIT";

    
        /**
         * value: "EMERGENCY"
         * @const
         */
        "EMERGENCY" = "EMERGENCY";

    
        /**
         * value: "PRE_AGREED"
         * @const
         */
        "PRE_AGREED" = "PRE_AGREED";

    
        /**
         * value: "TEMPORARY"
         * @const
         */
        "TEMPORARY" = "TEMPORARY";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    

    /**
    * Returns a <code>CreditLineType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CreditLineType} The enum <code>CreditLineType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

