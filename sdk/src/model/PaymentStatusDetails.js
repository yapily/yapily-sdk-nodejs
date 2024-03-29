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
import MultiAuthorisation from './MultiAuthorisation';
import PaymentIsoStatus from './PaymentIsoStatus';
import PaymentStatus from './PaymentStatus';

/**
 * The PaymentStatusDetails model module.
 * @module model/PaymentStatusDetails
 * @version 2.13.1
 */
class PaymentStatusDetails {
    /**
     * Constructs a new <code>PaymentStatusDetails</code>.
     * @alias module:model/PaymentStatusDetails
     */
    constructor() { 
        
        PaymentStatusDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentStatusDetails} obj Optional instance to populate.
     * @return {module:model/PaymentStatusDetails} The populated <code>PaymentStatusDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentStatusDetails();

            if (data.hasOwnProperty('status')) {
                obj['status'] = PaymentStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusReason')) {
                obj['statusReason'] = ApiClient.convertToType(data['statusReason'], 'String');
            }
            if (data.hasOwnProperty('statusReasonDescription')) {
                obj['statusReasonDescription'] = ApiClient.convertToType(data['statusReasonDescription'], 'String');
            }
            if (data.hasOwnProperty('statusUpdateDate')) {
                obj['statusUpdateDate'] = ApiClient.convertToType(data['statusUpdateDate'], 'Date');
            }
            if (data.hasOwnProperty('multiAuthorisationStatus')) {
                obj['multiAuthorisationStatus'] = MultiAuthorisation.constructFromObject(data['multiAuthorisationStatus']);
            }
            if (data.hasOwnProperty('isoStatus')) {
                obj['isoStatus'] = PaymentIsoStatus.constructFromObject(data['isoStatus']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaymentStatus} status
 */
PaymentStatusDetails.prototype['status'] = undefined;

/**
 * @member {String} statusReason
 */
PaymentStatusDetails.prototype['statusReason'] = undefined;

/**
 * @member {String} statusReasonDescription
 */
PaymentStatusDetails.prototype['statusReasonDescription'] = undefined;

/**
 * @member {Date} statusUpdateDate
 */
PaymentStatusDetails.prototype['statusUpdateDate'] = undefined;

/**
 * @member {module:model/MultiAuthorisation} multiAuthorisationStatus
 */
PaymentStatusDetails.prototype['multiAuthorisationStatus'] = undefined;

/**
 * @member {module:model/PaymentIsoStatus} isoStatus
 */
PaymentStatusDetails.prototype['isoStatus'] = undefined;






export default PaymentStatusDetails;

