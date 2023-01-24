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
/**
* Enum class AccountType.
* @enum {}
* @readonly
*/
export default class AccountType {
    
        /**
         * value: "CASH_TRADING"
         * @const
         */
        "CASH_TRADING" = "CASH_TRADING";

    
        /**
         * value: "CASH_INCOME"
         * @const
         */
        "CASH_INCOME" = "CASH_INCOME";

    
        /**
         * value: "CASH_PAYMENT"
         * @const
         */
        "CASH_PAYMENT" = "CASH_PAYMENT";

    
        /**
         * value: "CHARGE_CARD"
         * @const
         */
        "CHARGE_CARD" = "CHARGE_CARD";

    
        /**
         * value: "CHARGES"
         * @const
         */
        "CHARGES" = "CHARGES";

    
        /**
         * value: "COMMISSION"
         * @const
         */
        "COMMISSION" = "COMMISSION";

    
        /**
         * value: "CREDIT_CARD"
         * @const
         */
        "CREDIT_CARD" = "CREDIT_CARD";

    
        /**
         * value: "CURRENT"
         * @const
         */
        "CURRENT" = "CURRENT";

    
        /**
         * value: "E_MONEY"
         * @const
         */
        "E_MONEY" = "E_MONEY";

    
        /**
         * value: "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT"
         * @const
         */
        "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT" = "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT";

    
        /**
         * value: "LOAN"
         * @const
         */
        "LOAN" = "LOAN";

    
        /**
         * value: "MARGINAL_LENDING"
         * @const
         */
        "MARGINAL_LENDING" = "MARGINAL_LENDING";

    
        /**
         * value: "MONEY_MARKET"
         * @const
         */
        "MONEY_MARKET" = "MONEY_MARKET";

    
        /**
         * value: "MORTGAGE"
         * @const
         */
        "MORTGAGE" = "MORTGAGE";

    
        /**
         * value: "NON_RESIDENT_EXTERNAL"
         * @const
         */
        "NON_RESIDENT_EXTERNAL" = "NON_RESIDENT_EXTERNAL";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    
        /**
         * value: "OVERDRAFT"
         * @const
         */
        "OVERDRAFT" = "OVERDRAFT";

    
        /**
         * value: "OVERNIGHT_DEPOSIT"
         * @const
         */
        "OVERNIGHT_DEPOSIT" = "OVERNIGHT_DEPOSIT";

    
        /**
         * value: "PREPAID_CARD"
         * @const
         */
        "PREPAID_CARD" = "PREPAID_CARD";

    
        /**
         * value: "SALARY"
         * @const
         */
        "SALARY" = "SALARY";

    
        /**
         * value: "SAVINGS"
         * @const
         */
        "SAVINGS" = "SAVINGS";

    
        /**
         * value: "SETTLEMENT"
         * @const
         */
        "SETTLEMENT" = "SETTLEMENT";

    
        /**
         * value: "TAX"
         * @const
         */
        "TAX" = "TAX";

    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    

    /**
    * Returns a <code>AccountType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AccountType} The enum <code>AccountType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
