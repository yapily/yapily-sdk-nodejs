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
import DeleteStatusEnum from './DeleteStatusEnum';

/**
 * The EventSubscriptionDeleteResponse model module.
 * @module model/EventSubscriptionDeleteResponse
 * @version 2.13.1
 */
class EventSubscriptionDeleteResponse {
    /**
     * Constructs a new <code>EventSubscriptionDeleteResponse</code>.
     * @alias module:model/EventSubscriptionDeleteResponse
     * @param eventTypeId {String} Unique identifier of the event type (for which notifications will be sent)
     * @param applicationId {String} Application related to event subscription.
     * @param created {Date} Creation datetime of event subscription.
     * @param deleteStatus {module:model/DeleteStatusEnum} 
     */
    constructor(eventTypeId, applicationId, created, deleteStatus) { 
        
        EventSubscriptionDeleteResponse.initialize(this, eventTypeId, applicationId, created, deleteStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTypeId, applicationId, created, deleteStatus) { 
        obj['eventTypeId'] = eventTypeId;
        obj['applicationId'] = applicationId;
        obj['created'] = created;
        obj['deleteStatus'] = deleteStatus;
    }

    /**
     * Constructs a <code>EventSubscriptionDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventSubscriptionDeleteResponse} obj Optional instance to populate.
     * @return {module:model/EventSubscriptionDeleteResponse} The populated <code>EventSubscriptionDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventSubscriptionDeleteResponse();

            if (data.hasOwnProperty('eventTypeId')) {
                obj['eventTypeId'] = ApiClient.convertToType(data['eventTypeId'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('deleteStatus')) {
                obj['deleteStatus'] = DeleteStatusEnum.constructFromObject(data['deleteStatus']);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of the event type (for which notifications will be sent)
 * @member {String} eventTypeId
 */
EventSubscriptionDeleteResponse.prototype['eventTypeId'] = undefined;

/**
 * Application related to event subscription.
 * @member {String} applicationId
 */
EventSubscriptionDeleteResponse.prototype['applicationId'] = undefined;

/**
 * Creation datetime of event subscription.
 * @member {Date} created
 */
EventSubscriptionDeleteResponse.prototype['created'] = undefined;

/**
 * @member {module:model/DeleteStatusEnum} deleteStatus
 */
EventSubscriptionDeleteResponse.prototype['deleteStatus'] = undefined;






export default EventSubscriptionDeleteResponse;
