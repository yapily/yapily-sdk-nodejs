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
import Institution from './Institution';
import Media from './Media';

/**
 * The Application model module.
 * @module model/Application
 * @version 2.13.1
 */
class Application {
    /**
     * Constructs a new <code>Application</code>.
     * Information about the application.
     * @alias module:model/Application
     */
    constructor() { 
        
        Application.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Application();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('authCallbacks')) {
                obj['authCallbacks'] = ApiClient.convertToType(data['authCallbacks'], ['String']);
            }
            if (data.hasOwnProperty('institutions')) {
                obj['institutions'] = ApiClient.convertToType(data['institutions'], [Institution]);
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], [Media]);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Unique identification for the `Application` as assigned by Yapily.
 * @member {String} uuid
 */
Application.prototype['uuid'] = undefined;

/**
 * The individual name of the `Application`.
 * @member {String} name
 */
Application.prototype['name'] = undefined;

/**
 * States whether an `Application` is active.
 * @member {Boolean} active
 */
Application.prototype['active'] = undefined;

/**
 * @member {Array.<String>} authCallbacks
 */
Application.prototype['authCallbacks'] = undefined;

/**
 * @member {Array.<module:model/Institution>} institutions
 */
Application.prototype['institutions'] = undefined;

/**
 * @member {Array.<module:model/Media>} media
 */
Application.prototype['media'] = undefined;

/**
 * Date and time of when the application was created.
 * @member {Date} created
 */
Application.prototype['created'] = undefined;

/**
 * Date and time of when the application was last updated.
 * @member {Date} updated
 */
Application.prototype['updated'] = undefined;






export default Application;

