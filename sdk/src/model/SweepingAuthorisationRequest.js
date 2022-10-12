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
import InitiationDetails from './InitiationDetails';
import PaymentContextType from './PaymentContextType';
import RedirectRequest from './RedirectRequest';
import SweepingControlParameters from './SweepingControlParameters';

/**
 * The SweepingAuthorisationRequest model module.
 * @module model/SweepingAuthorisationRequest
 * @version 2.13.1
 */
class SweepingAuthorisationRequest {
    /**
     * Constructs a new <code>SweepingAuthorisationRequest</code>.
     * @alias module:model/SweepingAuthorisationRequest
     * @param institutionId {String} __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
     * @param controlParameters {module:model/SweepingControlParameters} 
     * @param initiationDetails {module:model/InitiationDetails} 
     */
    constructor(institutionId, controlParameters, initiationDetails) { 
        
        SweepingAuthorisationRequest.initialize(this, institutionId, controlParameters, initiationDetails);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, institutionId, controlParameters, initiationDetails) { 
        obj['institutionId'] = institutionId;
        obj['controlParameters'] = controlParameters;
        obj['initiationDetails'] = initiationDetails;
    }

    /**
     * Constructs a <code>SweepingAuthorisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SweepingAuthorisationRequest} obj Optional instance to populate.
     * @return {module:model/SweepingAuthorisationRequest} The populated <code>SweepingAuthorisationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SweepingAuthorisationRequest();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('applicationUserId')) {
                obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
            }
            if (data.hasOwnProperty('forwardParameters')) {
                obj['forwardParameters'] = ApiClient.convertToType(data['forwardParameters'], ['String']);
            }
            if (data.hasOwnProperty('contextType')) {
                obj['contextType'] = PaymentContextType.constructFromObject(data['contextType']);
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
            if (data.hasOwnProperty('controlParameters')) {
                obj['controlParameters'] = SweepingControlParameters.constructFromObject(data['controlParameters']);
            }
            if (data.hasOwnProperty('initiationDetails')) {
                obj['initiationDetails'] = InitiationDetails.constructFromObject(data['initiationDetails']);
            }
        }
        return obj;
    }


}

/**
 * This is the Yapily user identifier for the user returned by the create user step POST ../users
 * @member {String} userId
 */
SweepingAuthorisationRequest.prototype['userId'] = undefined;

/**
 * A client's own user reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value.  Clients can then use either their own applicationUserId or the Yapily userId to reference the same user in future calls.
 * @member {String} applicationUserId
 */
SweepingAuthorisationRequest.prototype['applicationUserId'] = undefined;

/**
 * Extra parameters the TPP may want to get forwarded in the callback request after the PSU redirect.
 * @member {Array.<String>} forwardParameters
 */
SweepingAuthorisationRequest.prototype['forwardParameters'] = undefined;

/**
 * @member {module:model/PaymentContextType} contextType
 */
SweepingAuthorisationRequest.prototype['contextType'] = undefined;

/**
 * __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
 * @member {String} institutionId
 */
SweepingAuthorisationRequest.prototype['institutionId'] = undefined;

/**
 * __Optional__. The server to redirect the user to after the user complete the authorisation at the `Institution`. <br><br>See [Using a callback (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-optional) for more information.
 * @member {String} callback
 */
SweepingAuthorisationRequest.prototype['callback'] = undefined;

/**
 * @member {module:model/RedirectRequest} redirect
 */
SweepingAuthorisationRequest.prototype['redirect'] = undefined;

/**
 * __Conditional__. Used to receive a `oneTimeToken` rather than a `consentToken` at the `callback` for additional security. This can only be used when the `callback` is set. <br><br>See [Using a callback with an OTT (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-with-an-ott-optional) for more information.
 * @member {Boolean} oneTimeToken
 */
SweepingAuthorisationRequest.prototype['oneTimeToken'] = undefined;

/**
 * @member {module:model/SweepingControlParameters} controlParameters
 */
SweepingAuthorisationRequest.prototype['controlParameters'] = undefined;

/**
 * @member {module:model/InitiationDetails} initiationDetails
 */
SweepingAuthorisationRequest.prototype['initiationDetails'] = undefined;






export default SweepingAuthorisationRequest;

