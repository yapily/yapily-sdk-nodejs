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
* Enum class PaymentIsoStatusCodeEnum.
* @enum {}
* @readonly
*/
export default class PaymentIsoStatusCodeEnum {
    
        /**
         * value: "ACCC"
         * @const
         */
        "ACCC" = "ACCC";

    
        /**
         * value: "ACCP"
         * @const
         */
        "ACCP" = "ACCP";

    
        /**
         * value: "ACSC"
         * @const
         */
        "ACSC" = "ACSC";

    
        /**
         * value: "ACSP"
         * @const
         */
        "ACSP" = "ACSP";

    
        /**
         * value: "ACTC"
         * @const
         */
        "ACTC" = "ACTC";

    
        /**
         * value: "ACWC"
         * @const
         */
        "ACWC" = "ACWC";

    
        /**
         * value: "ACWP"
         * @const
         */
        "ACWP" = "ACWP";

    
        /**
         * value: "RCVD"
         * @const
         */
        "RCVD" = "RCVD";

    
        /**
         * value: "PDNG"
         * @const
         */
        "PDNG" = "PDNG";

    
        /**
         * value: "RJCT"
         * @const
         */
        "RJCT" = "RJCT";

    
        /**
         * value: "CANC"
         * @const
         */
        "CANC" = "CANC";

    
        /**
         * value: "ACFC"
         * @const
         */
        "ACFC" = "ACFC";

    
        /**
         * value: "PATC"
         * @const
         */
        "PATC" = "PATC";

    
        /**
         * value: "PART"
         * @const
         */
        "PART" = "PART";

    

    /**
    * Returns a <code>PaymentIsoStatusCodeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PaymentIsoStatusCodeEnum} The enum <code>PaymentIsoStatusCodeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

