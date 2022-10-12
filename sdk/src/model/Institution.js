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
import Country from './Country';
import CredentialsType from './CredentialsType';
import EnvironmentType from './EnvironmentType';
import FeatureEnum from './FeatureEnum';
import Media from './Media';
import MonitoringFeatureStatus from './MonitoringFeatureStatus';

/**
 * The Institution model module.
 * @module model/Institution
 * @version 2.13.1
 */
class Institution {
    /**
     * Constructs a new <code>Institution</code>.
     * @alias module:model/Institution
     */
    constructor() { 
        
        Institution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Institution} obj Optional instance to populate.
     * @return {module:model/Institution} The populated <code>Institution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Institution();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
            }
            if (data.hasOwnProperty('environmentType')) {
                obj['environmentType'] = EnvironmentType.constructFromObject(data['environmentType']);
            }
            if (data.hasOwnProperty('credentialsType')) {
                obj['credentialsType'] = CredentialsType.constructFromObject(data['credentialsType']);
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], [Media]);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [FeatureEnum]);
            }
            if (data.hasOwnProperty('monitoring')) {
                obj['monitoring'] = ApiClient.convertToType(data['monitoring'], {'String': MonitoringFeatureStatus});
            }
        }
        return obj;
    }


}

/**
 * The Yapily Id for the `Institution`
 * @member {String} id
 */
Institution.prototype['id'] = undefined;

/**
 * The friendly name of the `Institution`
 * @member {String} name
 */
Institution.prototype['name'] = undefined;

/**
 * The full name of the `Institution`
 * @member {String} fullName
 */
Institution.prototype['fullName'] = undefined;

/**
 * An array of `Country` denoting which regions the `Institution` provides coverage for
 * @member {Array.<module:model/Country>} countries
 */
Institution.prototype['countries'] = undefined;

/**
 * @member {module:model/EnvironmentType} environmentType
 */
Institution.prototype['environmentType'] = undefined;

/**
 * @member {module:model/CredentialsType} credentialsType
 */
Institution.prototype['credentialsType'] = undefined;

/**
 * Contains links to the logo and the icons for the `Institution`
 * @member {Array.<module:model/Media>} media
 */
Institution.prototype['media'] = undefined;

/**
 * @member {Array.<module:model/FeatureEnum>} features
 */
Institution.prototype['features'] = undefined;

/**
 * @member {Object.<String, module:model/MonitoringFeatureStatus>} monitoring
 */
Institution.prototype['monitoring'] = undefined;






export default Institution;

