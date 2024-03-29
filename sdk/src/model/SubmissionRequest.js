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
import PaymentContextType from './PaymentContextType';

/**
 * The SubmissionRequest model module.
 * @module model/SubmissionRequest
 * @version 2.13.1
 */
class SubmissionRequest {
    /**
     * Constructs a new <code>SubmissionRequest</code>.
     * __Mandatory__. The payment request object defining the details of the payment for execution under the Variable Recurring Payment consent.
     * @alias module:model/SubmissionRequest
     * @param paymentIdempotencyId {String} __Mandatory__. A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters.
     * @param psuAuthenticationMethod {String} __Mandatory__. Chosen authentication method for submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED].
     * @param paymentAmount {module:model/Amount} 
     */
    constructor(paymentIdempotencyId, psuAuthenticationMethod, paymentAmount) { 
        
        SubmissionRequest.initialize(this, paymentIdempotencyId, psuAuthenticationMethod, paymentAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentIdempotencyId, psuAuthenticationMethod, paymentAmount) { 
        obj['paymentIdempotencyId'] = paymentIdempotencyId;
        obj['psuAuthenticationMethod'] = psuAuthenticationMethod;
        obj['paymentAmount'] = paymentAmount;
    }

    /**
     * Constructs a <code>SubmissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmissionRequest} obj Optional instance to populate.
     * @return {module:model/SubmissionRequest} The populated <code>SubmissionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmissionRequest();

            if (data.hasOwnProperty('paymentIdempotencyId')) {
                obj['paymentIdempotencyId'] = ApiClient.convertToType(data['paymentIdempotencyId'], 'String');
            }
            if (data.hasOwnProperty('psuAuthenticationMethod')) {
                obj['psuAuthenticationMethod'] = ApiClient.convertToType(data['psuAuthenticationMethod'], 'String');
            }
            if (data.hasOwnProperty('contextType')) {
                obj['contextType'] = PaymentContextType.constructFromObject(data['contextType']);
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = Amount.constructFromObject(data['paymentAmount']);
            }
        }
        return obj;
    }


}

/**
 * __Mandatory__. A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters.
 * @member {String} paymentIdempotencyId
 */
SubmissionRequest.prototype['paymentIdempotencyId'] = undefined;

/**
 * __Mandatory__. Chosen authentication method for submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED].
 * @member {String} psuAuthenticationMethod
 */
SubmissionRequest.prototype['psuAuthenticationMethod'] = undefined;

/**
 * @member {module:model/PaymentContextType} contextType
 */
SubmissionRequest.prototype['contextType'] = undefined;

/**
 * @member {module:model/Amount} paymentAmount
 */
SubmissionRequest.prototype['paymentAmount'] = undefined;






export default SubmissionRequest;

