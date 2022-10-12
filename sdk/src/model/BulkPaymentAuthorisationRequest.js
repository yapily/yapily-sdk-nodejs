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
import BulkPaymentRequest from './BulkPaymentRequest';
import RedirectRequest from './RedirectRequest';

/**
 * The BulkPaymentAuthorisationRequest model module.
 * @module model/BulkPaymentAuthorisationRequest
 * @version 2.13.1
 */
class BulkPaymentAuthorisationRequest {
    /**
     * Constructs a new <code>BulkPaymentAuthorisationRequest</code>.
     * @alias module:model/BulkPaymentAuthorisationRequest
     * @param institutionId {String} __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
     */
    constructor(institutionId) { 
        
        BulkPaymentAuthorisationRequest.initialize(this, institutionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, institutionId) { 
        obj['institutionId'] = institutionId;
    }

    /**
     * Constructs a <code>BulkPaymentAuthorisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkPaymentAuthorisationRequest} obj Optional instance to populate.
     * @return {module:model/BulkPaymentAuthorisationRequest} The populated <code>BulkPaymentAuthorisationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkPaymentAuthorisationRequest();

            if (data.hasOwnProperty('userUuid')) {
                obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
            }
            if (data.hasOwnProperty('applicationUserId')) {
                obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
            }
            if (data.hasOwnProperty('forwardParameters')) {
                obj['forwardParameters'] = ApiClient.convertToType(data['forwardParameters'], ['String']);
            }
            if (data.hasOwnProperty('institutionId')) {
                obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('redirect')) {
                obj['redirect'] = RedirectRequest.constructFromObject(data['redirect']);
            }
            if (data.hasOwnProperty('oneTimeToken')) {
                obj['oneTimeToken'] = ApiClient.convertToType(data['oneTimeToken'], 'Boolean');
            }
            if (data.hasOwnProperty('paymentRequest')) {
                obj['paymentRequest'] = BulkPaymentRequest.constructFromObject(data['paymentRequest']);
            }
        }
        return obj;
    }


}

/**
 * __Conditional__. The reference to the `User` that will authorise the authorisation request using the Yapily generated UUID. Either the `userUuid` or `applicationUserId` must be provided.
 * @member {String} userUuid
 */
BulkPaymentAuthorisationRequest.prototype['userUuid'] = undefined;

/**
 * __Conditional__. The user-friendly reference to the `User` that will authorise the authorisation request. If a `User` with the specified `applicationUserId` exists, it will be used otherwise, a new `User` with the specified `applicationUserId` will be created and used. Either the `userUuid` or `applicationUserId` must be provided.
 * @member {String} applicationUserId
 */
BulkPaymentAuthorisationRequest.prototype['applicationUserId'] = undefined;

/**
 * Extra parameters the TPP may want to get forwarded in the callback request after the PSU redirect.
 * @member {Array.<String>} forwardParameters
 */
BulkPaymentAuthorisationRequest.prototype['forwardParameters'] = undefined;

/**
 * __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
 * @member {String} institutionId
 */
BulkPaymentAuthorisationRequest.prototype['institutionId'] = undefined;

/**
 * __Optional__. The server to redirect the user to after the user complete the authorisation at the `Institution`. <br><br>See [Using a callback (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-optional) for more information.
 * @member {String} callback
 */
BulkPaymentAuthorisationRequest.prototype['callback'] = undefined;

/**
 * @member {module:model/RedirectRequest} redirect
 */
BulkPaymentAuthorisationRequest.prototype['redirect'] = undefined;

/**
 * __Conditional__. Used to receive a `oneTimeToken` rather than a `consentToken` at the `callback` for additional security. This can only be used when the `callback` is set. <br><br>See [Using a callback with an OTT (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-with-an-ott-optional) for more information.
 * @member {Boolean} oneTimeToken
 */
BulkPaymentAuthorisationRequest.prototype['oneTimeToken'] = undefined;

/**
 * @member {module:model/BulkPaymentRequest} paymentRequest
 */
BulkPaymentAuthorisationRequest.prototype['paymentRequest'] = undefined;






export default BulkPaymentAuthorisationRequest;

