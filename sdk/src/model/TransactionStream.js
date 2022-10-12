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
import EnrichedTransaction from './EnrichedTransaction';
import TransactionSchedule from './TransactionSchedule';

/**
 * The TransactionStream model module.
 * @module model/TransactionStream
 * @version 2.13.1
 */
class TransactionStream {
    /**
     * Constructs a new <code>TransactionStream</code>.
     * Part of a financial profile for a User.
     * @alias module:model/TransactionStream
     */
    constructor() { 
        
        TransactionStream.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionStream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionStream} obj Optional instance to populate.
     * @return {module:model/TransactionStream} The populated <code>TransactionStream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionStream();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [EnrichedTransaction]);
            }
            if (data.hasOwnProperty('transactionSchedule')) {
                obj['transactionSchedule'] = TransactionSchedule.constructFromObject(data['transactionSchedule']);
            }
            if (data.hasOwnProperty('scheduleConsistencyScore')) {
                obj['scheduleConsistencyScore'] = ApiClient.convertToType(data['scheduleConsistencyScore'], 'Number');
            }
            if (data.hasOwnProperty('nextExpectedTransactionDate')) {
                obj['nextExpectedTransactionDate'] = ApiClient.convertToType(data['nextExpectedTransactionDate'], 'Date');
            }
            if (data.hasOwnProperty('earliestTransactionDate')) {
                obj['earliestTransactionDate'] = ApiClient.convertToType(data['earliestTransactionDate'], 'Date');
            }
            if (data.hasOwnProperty('mostRecentTransactionDate')) {
                obj['mostRecentTransactionDate'] = ApiClient.convertToType(data['mostRecentTransactionDate'], 'Date');
            }
            if (data.hasOwnProperty('amountConsistencyScore')) {
                obj['amountConsistencyScore'] = ApiClient.convertToType(data['amountConsistencyScore'], 'Number');
            }
            if (data.hasOwnProperty('averageAmount')) {
                obj['averageAmount'] = ApiClient.convertToType(data['averageAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the TransactionStream
 * @member {String} name
 */
TransactionStream.prototype['name'] = undefined;

/**
 * A list of Transactions from the transaction stream.
 * @member {Array.<module:model/EnrichedTransaction>} transactions
 */
TransactionStream.prototype['transactions'] = undefined;

/**
 * @member {module:model/TransactionSchedule} transactionSchedule
 */
TransactionStream.prototype['transactionSchedule'] = undefined;

/**
 * The consistency of the transaction.  This is a number between 0 and 1 with 1 being the most consistent schedule.
 * @member {Number} scheduleConsistencyScore
 */
TransactionStream.prototype['scheduleConsistencyScore'] = undefined;

/**
 * When is the transaction expected to occur next.
 * @member {Date} nextExpectedTransactionDate
 */
TransactionStream.prototype['nextExpectedTransactionDate'] = undefined;

/**
 * When is the first recorded transaction date
 * @member {Date} earliestTransactionDate
 */
TransactionStream.prototype['earliestTransactionDate'] = undefined;

/**
 * When is the most recent transaction date
 * @member {Date} mostRecentTransactionDate
 */
TransactionStream.prototype['mostRecentTransactionDate'] = undefined;

/**
 * The consistency of the amount of the transaction.  This is a number between 0 and 1 with 1 being the most consistent amount.
 * @member {Number} amountConsistencyScore
 */
TransactionStream.prototype['amountConsistencyScore'] = undefined;

/**
 * The average amount of the transaction stream
 * @member {Number} averageAmount
 */
TransactionStream.prototype['averageAmount'] = undefined;






export default TransactionStream;

