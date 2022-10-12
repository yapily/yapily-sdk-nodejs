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
import ErrorIssue from './ErrorIssue';

/**
 * The ErrorDetails model module.
 * @module model/ErrorDetails
 * @version 2.13.1
 */
class ErrorDetails {
    /**
     * Constructs a new <code>ErrorDetails</code>.
     * @alias module:model/ErrorDetails
     * @param tracingId {String} Unique identifier of the request, used by Yapily for support purposes
     * @param code {Number} Numeric HTTP status code associated with the error
     * @param status {String} Textual description of the HTTP status
     */
    constructor(tracingId, code, status) { 
        
        ErrorDetails.initialize(this, tracingId, code, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tracingId, code, status) { 
        obj['tracingId'] = tracingId;
        obj['code'] = code;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetails} obj Optional instance to populate.
     * @return {module:model/ErrorDetails} The populated <code>ErrorDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetails();

            if (data.hasOwnProperty('tracingId')) {
                obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('supportUrl')) {
                obj['supportUrl'] = ApiClient.convertToType(data['supportUrl'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], [ErrorIssue]);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of the request, used by Yapily for support purposes
 * @member {String} tracingId
 */
ErrorDetails.prototype['tracingId'] = undefined;

/**
 * Numeric HTTP status code associated with the error
 * @member {Number} code
 */
ErrorDetails.prototype['code'] = undefined;

/**
 * Textual description of the HTTP status
 * @member {String} status
 */
ErrorDetails.prototype['status'] = undefined;

/**
 * Link to where further information regarding the error can be found
 * @member {String} supportUrl
 */
ErrorDetails.prototype['supportUrl'] = undefined;

/**
 * Source of the error. This may be YAPILY, the INSTITUTION, or the USER
 * @member {String} source
 */
ErrorDetails.prototype['source'] = undefined;

/**
 * List of issues relating to the error
 * @member {Array.<module:model/ErrorIssue>} issues
 */
ErrorDetails.prototype['issues'] = undefined;






export default ErrorDetails;

