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
import Amount from './Amount';
import FundsAvailable from './FundsAvailable';

/**
 * The FundsConfirmationResponse model module.
 * @module model/FundsConfirmationResponse
 * @version 2.13.1
 */
class FundsConfirmationResponse {
    /**
     * Constructs a new <code>FundsConfirmationResponse</code>.
     * @alias module:model/FundsConfirmationResponse
     * @param paymentAmount {module:model/Amount} 
     * @param fundsAvailable {module:model/FundsAvailable} 
     */
    constructor(paymentAmount, fundsAvailable) { 
        
        FundsConfirmationResponse.initialize(this, paymentAmount, fundsAvailable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentAmount, fundsAvailable) { 
        obj['paymentAmount'] = paymentAmount;
        obj['fundsAvailable'] = fundsAvailable;
    }

    /**
     * Constructs a <code>FundsConfirmationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundsConfirmationResponse} obj Optional instance to populate.
     * @return {module:model/FundsConfirmationResponse} The populated <code>FundsConfirmationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundsConfirmationResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = Amount.constructFromObject(data['paymentAmount']);
            }
            if (data.hasOwnProperty('fundsAvailable')) {
                obj['fundsAvailable'] = FundsAvailable.constructFromObject(data['fundsAvailable']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
FundsConfirmationResponse.prototype['id'] = undefined;

/**
 * The payment reference or description. Limited to a maximum of 18 characters long.
 * @member {String} reference
 */
FundsConfirmationResponse.prototype['reference'] = undefined;

/**
 * @member {module:model/Amount} paymentAmount
 */
FundsConfirmationResponse.prototype['paymentAmount'] = undefined;

/**
 * @member {module:model/FundsAvailable} fundsAvailable
 */
FundsConfirmationResponse.prototype['fundsAvailable'] = undefined;






export default FundsConfirmationResponse;

