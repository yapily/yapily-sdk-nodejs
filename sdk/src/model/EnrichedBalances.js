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
import EnrichedHistoricBalance from './EnrichedHistoricBalance';
import EnrichedPredictedBalance from './EnrichedPredictedBalance';

/**
 * The EnrichedBalances model module.
 * @module model/EnrichedBalances
 * @version 2.13.1
 */
class EnrichedBalances {
    /**
     * Constructs a new <code>EnrichedBalances</code>.
     * Enriched Balance information generated which include historic aggregated balances and predicted balances
     * @alias module:model/EnrichedBalances
     */
    constructor() { 
        
        EnrichedBalances.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnrichedBalances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrichedBalances} obj Optional instance to populate.
     * @return {module:model/EnrichedBalances} The populated <code>EnrichedBalances</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrichedBalances();

            if (data.hasOwnProperty('accountIds')) {
                obj['accountIds'] = ApiClient.convertToType(data['accountIds'], ['String']);
            }
            if (data.hasOwnProperty('institutions')) {
                obj['institutions'] = ApiClient.convertToType(data['institutions'], ['String']);
            }
            if (data.hasOwnProperty('historic')) {
                obj['historic'] = ApiClient.convertToType(data['historic'], [EnrichedHistoricBalance]);
            }
            if (data.hasOwnProperty('predicted')) {
                obj['predicted'] = ApiClient.convertToType(data['predicted'], [EnrichedPredictedBalance]);
            }
        }
        return obj;
    }


}

/**
 * A list of Account Ids used to generate Balance Prediction Profile.
 * @member {Array.<String>} accountIds
 */
EnrichedBalances.prototype['accountIds'] = undefined;

/**
 * A list of Institution Ids associated with the accounts used to generate Balance Prediction Profile.
 * @member {Array.<String>} institutions
 */
EnrichedBalances.prototype['institutions'] = undefined;

/**
 * A list of historic balances. Each balance in the list is an aggregation (sum) of the reported balance for each account within the profile at a point in time.
 * @member {Array.<module:model/EnrichedHistoricBalance>} historic
 */
EnrichedBalances.prototype['historic'] = undefined;

/**
 * A list of predicted balances. Each balance in the list is a projected balance of the profile at a future point in time.
 * @member {Array.<module:model/EnrichedPredictedBalance>} predicted
 */
EnrichedBalances.prototype['predicted'] = undefined;






export default EnrichedBalances;

