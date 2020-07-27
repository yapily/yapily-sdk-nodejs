/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.214
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Country', 'model/Media', 'model/MonitoringFeatureStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'), require('./Media'), require('./MonitoringFeatureStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Institution = factory(root.YapilyApi.ApiClient, root.YapilyApi.Country, root.YapilyApi.Media, root.YapilyApi.MonitoringFeatureStatus);
  }
}(this, function(ApiClient, Country, Media, MonitoringFeatureStatus) {
  'use strict';



  /**
   * The Institution model module.
   * @module model/Institution
   * @version 0.0.214
   */

  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
        obj['environmentType'] = ApiClient.convertToType(data['environmentType'], 'String');
      }
      if (data.hasOwnProperty('credentialsType')) {
        obj['credentialsType'] = ApiClient.convertToType(data['credentialsType'], 'String');
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], ['String']);
      }
      if (data.hasOwnProperty('monitoring')) {
        obj['monitoring'] = ApiClient.convertToType(data['monitoring'], {'String': MonitoringFeatureStatus});
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * @member {Array.<module:model/Country>} countries
   */
  exports.prototype['countries'] = undefined;
  /**
   * @member {module:model/Institution.EnvironmentTypeEnum} environmentType
   */
  exports.prototype['environmentType'] = undefined;
  /**
   * @member {module:model/Institution.CredentialsTypeEnum} credentialsType
   */
  exports.prototype['credentialsType'] = undefined;
  /**
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * @member {Array.<module:model/Institution.FeaturesEnum>} features
   */
  exports.prototype['features'] = undefined;
  /**
   * @member {Object.<String, module:model/MonitoringFeatureStatus>} monitoring
   */
  exports.prototype['monitoring'] = undefined;


  /**
   * Allowed values for the <code>environmentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnvironmentTypeEnum = {
    /**
     * value: "SANDBOX"
     * @const
     */
    "SANDBOX": "SANDBOX",
    /**
     * value: "MOCK"
     * @const
     */
    "MOCK": "MOCK",
    /**
     * value: "LIVE"
     * @const
     */
    "LIVE": "LIVE"  };

  /**
   * Allowed values for the <code>credentialsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CredentialsTypeEnum = {
    /**
     * value: "OAUTH1"
     * @const
     */
    "OAUTH1": "OAUTH1",
    /**
     * value: "OAUTH2"
     * @const
     */
    "OAUTH2": "OAUTH2",
    /**
     * value: "OAUTH2_NOSECRET"
     * @const
     */
    "OAUTH2_NOSECRET": "OAUTH2_NOSECRET",
    /**
     * value: "OAUTH2_SIGNATURE"
     * @const
     */
    "OAUTH2_SIGNATURE": "OAUTH2_SIGNATURE",
    /**
     * value: "OPEN_BANKING"
     * @const
     */
    "OPEN_BANKING": "OPEN_BANKING",
    /**
     * value: "OPEN_BANKING_UK_MANUAL"
     * @const
     */
    "OPEN_BANKING_UK_MANUAL": "OPEN_BANKING_UK_MANUAL",
    /**
     * value: "OPEN_BANKING_UK_AUTO"
     * @const
     */
    "OPEN_BANKING_UK_AUTO": "OPEN_BANKING_UK_AUTO",
    /**
     * value: "OPEN_BANKING_IBM"
     * @const
     */
    "OPEN_BANKING_IBM": "OPEN_BANKING_IBM",
    /**
     * value: "OPEN_BANKING_AUTO"
     * @const
     */
    "OPEN_BANKING_AUTO": "OPEN_BANKING_AUTO",
    /**
     * value: "OPEN_BANKING_MANUAL"
     * @const
     */
    "OPEN_BANKING_MANUAL": "OPEN_BANKING_MANUAL",
    /**
     * value: "API_KEY"
     * @const
     */
    "API_KEY": "API_KEY",
    /**
     * value: "OPEN_BANKING_NO_KEY"
     * @const
     */
    "OPEN_BANKING_NO_KEY": "OPEN_BANKING_NO_KEY",
    /**
     * value: "OPEN_BANKING_NO_TRANSPORT"
     * @const
     */
    "OPEN_BANKING_NO_TRANSPORT": "OPEN_BANKING_NO_TRANSPORT",
    /**
     * value: "TOKEN_IO"
     * @const
     */
    "TOKEN_IO": "TOKEN_IO"  };

  /**
   * Allowed values for the <code>features</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeaturesEnum = {
    /**
     * value: "INITIATE_PRE_AUTHORISATION"
     * @const
     */
    "INITIATE_PRE_AUTHORISATION": "INITIATE_PRE_AUTHORISATION",
    /**
     * value: "INITIATE_ACCOUNT_REQUEST"
     * @const
     */
    "INITIATE_ACCOUNT_REQUEST": "INITIATE_ACCOUNT_REQUEST",
    /**
     * value: "ACCOUNT_REQUEST_DETAILS"
     * @const
     */
    "ACCOUNT_REQUEST_DETAILS": "ACCOUNT_REQUEST_DETAILS",
    /**
     * value: "ACCOUNTS"
     * @const
     */
    "ACCOUNTS": "ACCOUNTS",
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT",
    /**
     * value: "ACCOUNT_TRANSACTIONS"
     * @const
     */
    "ACCOUNT_TRANSACTIONS": "ACCOUNT_TRANSACTIONS",
    /**
     * value: "ACCOUNT_STATEMENTS"
     * @const
     */
    "ACCOUNT_STATEMENTS": "ACCOUNT_STATEMENTS",
    /**
     * value: "ACCOUNT_STATEMENT"
     * @const
     */
    "ACCOUNT_STATEMENT": "ACCOUNT_STATEMENT",
    /**
     * value: "ACCOUNT_STATEMENT_FILE"
     * @const
     */
    "ACCOUNT_STATEMENT_FILE": "ACCOUNT_STATEMENT_FILE",
    /**
     * value: "ACCOUNT_SCHEDULED_PAYMENTS"
     * @const
     */
    "ACCOUNT_SCHEDULED_PAYMENTS": "ACCOUNT_SCHEDULED_PAYMENTS",
    /**
     * value: "ACCOUNT_DIRECT_DEBITS"
     * @const
     */
    "ACCOUNT_DIRECT_DEBITS": "ACCOUNT_DIRECT_DEBITS",
    /**
     * value: "ACCOUNT_PERIODIC_PAYMENTS"
     * @const
     */
    "ACCOUNT_PERIODIC_PAYMENTS": "ACCOUNT_PERIODIC_PAYMENTS",
    /**
     * value: "ACCOUNT_TRANSACTIONS_WITH_MERCHANT"
     * @const
     */
    "ACCOUNT_TRANSACTIONS_WITH_MERCHANT": "ACCOUNT_TRANSACTIONS_WITH_MERCHANT",
    /**
     * value: "IDENTITY"
     * @const
     */
    "IDENTITY": "IDENTITY",
    /**
     * value: "ACCOUNTS_WITHOUT_BALANCE"
     * @const
     */
    "ACCOUNTS_WITHOUT_BALANCE": "ACCOUNTS_WITHOUT_BALANCE",
    /**
     * value: "ACCOUNT_WITHOUT_BALANCE"
     * @const
     */
    "ACCOUNT_WITHOUT_BALANCE": "ACCOUNT_WITHOUT_BALANCE",
    /**
     * value: "ACCOUNT_BALANCES"
     * @const
     */
    "ACCOUNT_BALANCES": "ACCOUNT_BALANCES",
    /**
     * value: "INITIATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "INITIATE_SINGLE_PAYMENT_SORTCODE": "INITIATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENT_INITIATION_DETAILS"
     * @const
     */
    "EXISTING_PAYMENT_INITIATION_DETAILS": "EXISTING_PAYMENT_INITIATION_DETAILS",
    /**
     * value: "CREATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "CREATE_SINGLE_PAYMENT_SORTCODE": "CREATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENTS_DETAILS"
     * @const
     */
    "EXISTING_PAYMENTS_DETAILS": "EXISTING_PAYMENTS_DETAILS",
    /**
     * value: "INITIATE_DOMESTIC_SINGLE_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_SINGLE_PAYMENT": "INITIATE_DOMESTIC_SINGLE_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_SINGLE_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_SINGLE_PAYMENT": "CREATE_DOMESTIC_SINGLE_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT": "INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT": "CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT": "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT": "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_SCHEDULED_PAYMENT": "INITIATE_DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_SCHEDULED_PAYMENT": "CREATE_DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_PERIODIC_PAYMENT": "INITIATE_DOMESTIC_PERIODIC_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_PERIODIC_PAYMENT": "CREATE_DOMESTIC_PERIODIC_PAYMENT",
    /**
     * value: "PERIODIC_PAYMENT_FREQUENCY_EXTENDED"
     * @const
     */
    "PERIODIC_PAYMENT_FREQUENCY_EXTENDED": "PERIODIC_PAYMENT_FREQUENCY_EXTENDED",
    /**
     * value: "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT": "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT": "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT": "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT": "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT",
    /**
     * value: "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT": "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_PERIODIC_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_PERIODIC_PAYMENT": "CREATE_INTERNATIONAL_PERIODIC_PAYMENT",
    /**
     * value: "INITIATE_INTERNATIONAL_SINGLE_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_SINGLE_PAYMENT": "INITIATE_INTERNATIONAL_SINGLE_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_SINGLE_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_SINGLE_PAYMENT": "CREATE_INTERNATIONAL_SINGLE_PAYMENT",
    /**
     * value: "INITIATE_BULK_PAYMENT"
     * @const
     */
    "INITIATE_BULK_PAYMENT": "INITIATE_BULK_PAYMENT",
    /**
     * value: "CREATE_BULK_PAYMENT"
     * @const
     */
    "CREATE_BULK_PAYMENT": "CREATE_BULK_PAYMENT",
    /**
     * value: "TRANSFER"
     * @const
     */
    "TRANSFER": "TRANSFER",
    /**
     * value: "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"
     * @const
     */
    "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS": "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS",
    /**
     * value: "OPEN_DATA_ATMS"
     * @const
     */
    "OPEN_DATA_ATMS": "OPEN_DATA_ATMS"  };


  return exports;
}));


