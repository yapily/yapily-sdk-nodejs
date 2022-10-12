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
import AccountInfo from './AccountInfo';
import FeatureEnum from './FeatureEnum';

/**
 * The AccountRequest model module.
 * @module model/AccountRequest
 * @version 2.13.1
 */
class AccountRequest {
    /**
     * Constructs a new <code>AccountRequest</code>.
     * __Conditional__. Used to further specify details of the &#x60;Consent&#x60; to request &lt;br&gt;&lt;br&gt;Conditions:&lt;ol&gt;&lt;li&gt;Mandatory to access balance/transaction data for an &#x60;Institution&#x60; within the [CBI Globe](https://docs.yapily.com/pages/knowledge/open-banking/cbi_globe/)&lt;/li&gt;&lt;li&gt;Mandatory to specify the individual scopes to request from the user at the &#x60;Institution&#x60; for an account authorisation&lt;/li&gt;&lt;li&gt;Mandatory to specify an expiry time on the created &#x60;Consent&#x60; at which time will render it unusable&lt;/li&gt;&lt;li&gt;Mandatory to specify the date range that the created &#x60;Consent&#x60; will be able to access transactions for (given the range is support for the &#x60;Institution&#x60;)&lt;/li&gt;&lt;/ol&gt;
     * @alias module:model/AccountRequest
     */
    constructor() { 
        
        AccountRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountRequest} obj Optional instance to populate.
     * @return {module:model/AccountRequest} The populated <code>AccountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountRequest();

            if (data.hasOwnProperty('transactionFrom')) {
                obj['transactionFrom'] = ApiClient.convertToType(data['transactionFrom'], 'Date');
            }
            if (data.hasOwnProperty('transactionTo')) {
                obj['transactionTo'] = ApiClient.convertToType(data['transactionTo'], 'Date');
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
            }
            if (data.hasOwnProperty('accountIdentifiers')) {
                obj['accountIdentifiers'] = AccountInfo.constructFromObject(data['accountIdentifiers']);
            }
            if (data.hasOwnProperty('accountIdentifiersForTransaction')) {
                obj['accountIdentifiersForTransaction'] = ApiClient.convertToType(data['accountIdentifiersForTransaction'], [AccountInfo]);
            }
            if (data.hasOwnProperty('accountIdentifiersForBalance')) {
                obj['accountIdentifiersForBalance'] = ApiClient.convertToType(data['accountIdentifiersForBalance'], [AccountInfo]);
            }
            if (data.hasOwnProperty('featureScope')) {
                obj['featureScope'] = ApiClient.convertToType(data['featureScope'], [FeatureEnum]);
            }
        }
        return obj;
    }


}

/**
 * __Optional__. Used to specify the lower bound on when to pull transaction. This should be declared when accessing transaction older than 90 days for banks in the [CBI Globe](https://docs.yapily.com/pages/knowledge/open-banking/cbi_globe/).
 * @member {Date} transactionFrom
 */
AccountRequest.prototype['transactionFrom'] = undefined;

/**
 * __Optional__. When performing a request using the consent, this is the latest date of transaction records that can be retrieved.
 * @member {Date} transactionTo
 */
AccountRequest.prototype['transactionTo'] = undefined;

/**
 * __Optional__. Used to set a hard date for when the user's associated `Consent` will expire.<br><br>**Note**: If this supported by the bank, specifying this is property is opting out of having a long-lived consent that can be perpetually re-authorised by the user. This will add an `expiresAt` field on the `Consent` object which will render it unusable after this date.<br><br>**Note**: This is not supported by every `Institution`. In such case, the request will not fail but the property will be ignored and the created `Consent` will not have an expiry date.
 * @member {Date} expiresAt
 */
AccountRequest.prototype['expiresAt'] = undefined;

/**
 * @member {module:model/AccountInfo} accountIdentifiers
 */
AccountRequest.prototype['accountIdentifiers'] = undefined;

/**
 * __Conditional__. Used to create a request for the transactions of the account specified. Once the user authorises the request, only the transactions can be obtained by executing [GET Account Transactions](./#get-account-transactions). <br><br>This can be specified in conjunction with `accountIdentifiersForBalance` to generate a `Consent` that can both access the accounts balance and transactions.
 * @member {Array.<module:model/AccountInfo>} accountIdentifiersForTransaction
 */
AccountRequest.prototype['accountIdentifiersForTransaction'] = undefined;

/**
 * __Conditional__. Used to create a request for the balance of the account specified. Once the user authorises the request, only the balance can be obtained by executing [GET Account Balances](./#get-account-balances).<br><br> This can be specified in conjunction with `accountIdentifiersForTransaction` to generate a `Consent` that can both access the accounts balance and transactions.
 * @member {Array.<module:model/AccountInfo>} accountIdentifiersForBalance
 */
AccountRequest.prototype['accountIdentifiersForBalance'] = undefined;

/**
 * __Optional__. Used to granularly specify the set of features that the user will give their consent for when requesting access to their account information. Depending on the `Institution`, this may also populate a consent screen which list these scopes before the user authorises.<br><br>This endpoint accepts allow all [Financial Data Features](/guides/financial-data/features/#feature-list) that the `Institution` supports.To find out which scopes an `Institution` supports, check [GET Institution](./#get-institution).
 * @member {Array.<module:model/FeatureEnum>} featureScope
 */
AccountRequest.prototype['featureScope'] = undefined;






export default AccountRequest;

