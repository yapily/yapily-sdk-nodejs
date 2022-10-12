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
import AuthorisationStatus from './AuthorisationStatus';
import FeatureEnum from './FeatureEnum';
import ScaMethod from './ScaMethod';

/**
 * The EmbeddedAccountAuthorisationResponse model module.
 * @module model/EmbeddedAccountAuthorisationResponse
 * @version 2.13.1
 */
class EmbeddedAccountAuthorisationResponse {
    /**
     * Constructs a new <code>EmbeddedAccountAuthorisationResponse</code>.
     * @alias module:model/EmbeddedAccountAuthorisationResponse
     */
    constructor() { 
        
        EmbeddedAccountAuthorisationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmbeddedAccountAuthorisationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmbeddedAccountAuthorisationResponse} obj Optional instance to populate.
     * @return {module:model/EmbeddedAccountAuthorisationResponse} The populated <code>EmbeddedAccountAuthorisationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddedAccountAuthorisationResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userUuid')) {
                obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
            }
            if (data.hasOwnProperty('applicationUserId')) {
                obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('institutionId')) {
                obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AuthorisationStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('transactionFrom')) {
                obj['transactionFrom'] = ApiClient.convertToType(data['transactionFrom'], 'Date');
            }
            if (data.hasOwnProperty('transactionTo')) {
                obj['transactionTo'] = ApiClient.convertToType(data['transactionTo'], 'Date');
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
            }
            if (data.hasOwnProperty('timeToExpireInMillis')) {
                obj['timeToExpireInMillis'] = ApiClient.convertToType(data['timeToExpireInMillis'], 'Number');
            }
            if (data.hasOwnProperty('timeToExpire')) {
                obj['timeToExpire'] = ApiClient.convertToType(data['timeToExpire'], 'String');
            }
            if (data.hasOwnProperty('featureScope')) {
                obj['featureScope'] = ApiClient.convertToType(data['featureScope'], [FeatureEnum]);
            }
            if (data.hasOwnProperty('consentToken')) {
                obj['consentToken'] = ApiClient.convertToType(data['consentToken'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('authorizedAt')) {
                obj['authorizedAt'] = ApiClient.convertToType(data['authorizedAt'], 'Date');
            }
            if (data.hasOwnProperty('institutionConsentId')) {
                obj['institutionConsentId'] = ApiClient.convertToType(data['institutionConsentId'], 'String');
            }
            if (data.hasOwnProperty('authorisationUrl')) {
                obj['authorisationUrl'] = ApiClient.convertToType(data['authorisationUrl'], 'String');
            }
            if (data.hasOwnProperty('qrCodeUrl')) {
                obj['qrCodeUrl'] = ApiClient.convertToType(data['qrCodeUrl'], 'String');
            }
            if (data.hasOwnProperty('scaMethods')) {
                obj['scaMethods'] = ApiClient.convertToType(data['scaMethods'], [ScaMethod]);
            }
            if (data.hasOwnProperty('selectedScaMethod')) {
                obj['selectedScaMethod'] = ScaMethod.constructFromObject(data['selectedScaMethod']);
            }
        }
        return obj;
    }


}

/**
 * `User` for which the authorisation request was created.
 * @member {String} id
 */
EmbeddedAccountAuthorisationResponse.prototype['id'] = undefined;

/**
 * __Conditional__. User-friendly identifier of the `User` that provides authorisation. If a `User` with the specified `applicationUserId` exists, it will be used otherwise, a new `User` with the specified `applicationUserId` will be created and used. Either the `userUuid` or `applicationUserId` must be provided.
 * @member {String} userUuid
 */
EmbeddedAccountAuthorisationResponse.prototype['userUuid'] = undefined;

/**
 * __Conditional__. The user-friendly reference to the `User` that will authorise the authorisation request. If a `User` with the specified `applicationUserId` exists, it will be used otherwise, a new `User` with the specified `applicationUserId` will be created and used. Either the `userUuid` or `applicationUserId` must be provided.
 * @member {String} applicationUserId
 */
EmbeddedAccountAuthorisationResponse.prototype['applicationUserId'] = undefined;

/**
 * @member {String} referenceId
 */
EmbeddedAccountAuthorisationResponse.prototype['referenceId'] = undefined;

/**
 * __Mandatory__. The `Institution` the authorisation request is sent to.
 * @member {String} institutionId
 */
EmbeddedAccountAuthorisationResponse.prototype['institutionId'] = undefined;

/**
 * @member {module:model/AuthorisationStatus} status
 */
EmbeddedAccountAuthorisationResponse.prototype['status'] = undefined;

/**
 * Date and time of when the embedded authorisation was created by the application user.
 * @member {Date} createdAt
 */
EmbeddedAccountAuthorisationResponse.prototype['createdAt'] = undefined;

/**
 * When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved.
 * @member {Date} transactionFrom
 */
EmbeddedAccountAuthorisationResponse.prototype['transactionFrom'] = undefined;

/**
 * When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved.
 * @member {Date} transactionTo
 */
EmbeddedAccountAuthorisationResponse.prototype['transactionTo'] = undefined;

/**
 * Date and time of when the embedded authorisation will expire by. Reauthorisation will be needed to retain access.
 * @member {Date} expiresAt
 */
EmbeddedAccountAuthorisationResponse.prototype['expiresAt'] = undefined;

/**
 * @member {Number} timeToExpireInMillis
 */
EmbeddedAccountAuthorisationResponse.prototype['timeToExpireInMillis'] = undefined;

/**
 * @member {String} timeToExpire
 */
EmbeddedAccountAuthorisationResponse.prototype['timeToExpire'] = undefined;

/**
 * The set of features that the consent will provide access to.
 * @member {Array.<module:model/FeatureEnum>} featureScope
 */
EmbeddedAccountAuthorisationResponse.prototype['featureScope'] = undefined;

/**
 * Represents the authorisation to gain access to the requested features. Required to access account information or make a payment request.
 * @member {String} consentToken
 */
EmbeddedAccountAuthorisationResponse.prototype['consentToken'] = undefined;

/**
 * Corellation ID used when handshaking with a new insitution via OAuth2 registration.
 * @member {String} state
 */
EmbeddedAccountAuthorisationResponse.prototype['state'] = undefined;

/**
 * Date and time of when the request was authorised by the Institution.
 * @member {Date} authorizedAt
 */
EmbeddedAccountAuthorisationResponse.prototype['authorizedAt'] = undefined;

/**
 * Identification of the consent at the Institution.
 * @member {String} institutionConsentId
 */
EmbeddedAccountAuthorisationResponse.prototype['institutionConsentId'] = undefined;

/**
 * @member {String} authorisationUrl
 */
EmbeddedAccountAuthorisationResponse.prototype['authorisationUrl'] = undefined;

/**
 * The URL link for the QR code that may be scanned via a mobile device to make a authorisation redirect to the bank (authURL encoded).
 * @member {String} qrCodeUrl
 */
EmbeddedAccountAuthorisationResponse.prototype['qrCodeUrl'] = undefined;

/**
 * List of `SCA methods` the `Institution` supports and that are available for selection.
 * @member {Array.<module:model/ScaMethod>} scaMethods
 */
EmbeddedAccountAuthorisationResponse.prototype['scaMethods'] = undefined;

/**
 * @member {module:model/ScaMethod} selectedScaMethod
 */
EmbeddedAccountAuthorisationResponse.prototype['selectedScaMethod'] = undefined;






export default EmbeddedAccountAuthorisationResponse;

