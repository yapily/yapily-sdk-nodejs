/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.157.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AuthorisationRequestResponse = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AuthorisationRequestResponse model module.
   * @module model/AuthorisationRequestResponse
   * @version 1.211.0
   */

  /**
   * Constructs a new <code>AuthorisationRequestResponse</code>.
   * @alias module:model/AuthorisationRequestResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AuthorisationRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthorisationRequestResponse} obj Optional instance to populate.
   * @return {module:model/AuthorisationRequestResponse} The populated <code>AuthorisationRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
        obj['featureScope'] = ApiClient.convertToType(data['featureScope'], ['String']);
      }
      if (data.hasOwnProperty('authorisationUrl')) {
        obj['authorisationUrl'] = ApiClient.convertToType(data['authorisationUrl'], 'String');
      }
      if (data.hasOwnProperty('consentToken')) {
        obj['consentToken'] = ApiClient.convertToType(data['consentToken'], 'String');
      }
      if (data.hasOwnProperty('qrCodeUrl')) {
        obj['qrCodeUrl'] = ApiClient.convertToType(data['qrCodeUrl'], 'String');
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
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * @member {String} applicationUserId
   */
  exports.prototype['applicationUserId'] = undefined;
  /**
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {module:model/AuthorisationRequestResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} transactionFrom
   */
  exports.prototype['transactionFrom'] = undefined;
  /**
   * @member {Date} transactionTo
   */
  exports.prototype['transactionTo'] = undefined;
  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;
  /**
   * Deprecated. Use `timeToExpire` instead.
   * @member {Number} timeToExpireInMillis
   */
  exports.prototype['timeToExpireInMillis'] = undefined;
  /**
   * ISO 8601 duration
   * @member {String} timeToExpire
   */
  exports.prototype['timeToExpire'] = undefined;
  /**
   * @member {Array.<module:model/AuthorisationRequestResponse.FeatureScopeEnum>} featureScope
   */
  exports.prototype['featureScope'] = undefined;
  /**
   * @member {String} authorisationUrl
   */
  exports.prototype['authorisationUrl'] = undefined;
  /**
   * @member {String} consentToken
   */
  exports.prototype['consentToken'] = undefined;
  /**
   * @member {String} qrCodeUrl
   */
  exports.prototype['qrCodeUrl'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Date} authorizedAt
   */
  exports.prototype['authorizedAt'] = undefined;
  /**
   * @member {String} institutionConsentId
   */
  exports.prototype['institutionConsentId'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "AWAITING_AUTHORIZATION"
     * @const
     */
    "AWAITING_AUTHORIZATION": "AWAITING_AUTHORIZATION",
    /**
     * value: "AWAITING_FURTHER_AUTHORIZATION"
     * @const
     */
    "AWAITING_FURTHER_AUTHORIZATION": "AWAITING_FURTHER_AUTHORIZATION",
    /**
     * value: "AWAITING_RE_AUTHORIZATION"
     * @const
     */
    "AWAITING_RE_AUTHORIZATION": "AWAITING_RE_AUTHORIZATION",
    /**
     * value: "AUTHORIZED"
     * @const
     */
    "AUTHORIZED": "AUTHORIZED",
    /**
     * value: "CONSUMED"
     * @const
     */
    "CONSUMED": "CONSUMED",
    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED",
    /**
     * value: "REVOKED"
     * @const
     */
    "REVOKED": "REVOKED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",
    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",
    /**
     * value: "AWAITING_PRE_AUTHORIZATION"
     * @const
     */
    "AWAITING_PRE_AUTHORIZATION": "AWAITING_PRE_AUTHORIZATION",
    /**
     * value: "AWAITING_DECOUPLED_PRE_AUTHORIZATION"
     * @const
     */
    "AWAITING_DECOUPLED_PRE_AUTHORIZATION": "AWAITING_DECOUPLED_PRE_AUTHORIZATION",
    /**
     * value: "PRE_AUTHORIZED"
     * @const
     */
    "PRE_AUTHORIZED": "PRE_AUTHORIZED",
    /**
     * value: "AWAITING_DECOUPLED_AUTHORIZATION"
     * @const
     */
    "AWAITING_DECOUPLED_AUTHORIZATION": "AWAITING_DECOUPLED_AUTHORIZATION",
    /**
     * value: "AWAITING_SCA_METHOD"
     * @const
     */
    "AWAITING_SCA_METHOD": "AWAITING_SCA_METHOD",
    /**
     * value: "AWAITING_SCA_CODE"
     * @const
     */
    "AWAITING_SCA_CODE": "AWAITING_SCA_CODE"  };

  /**
   * Allowed values for the <code>featureScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeatureScopeEnum = {
    /**
     * value: "INITIATE_PRE_AUTHORISATION"
     * @const
     */
    "INITIATE_PRE_AUTHORISATION": "INITIATE_PRE_AUTHORISATION",
    /**
     * value: "INITIATE_PRE_AUTHORISATION_ACCOUNTS"
     * @const
     */
    "INITIATE_PRE_AUTHORISATION_ACCOUNTS": "INITIATE_PRE_AUTHORISATION_ACCOUNTS",
    /**
     * value: "INITIATE_PRE_AUTHORISATION_PAYMENTS"
     * @const
     */
    "INITIATE_PRE_AUTHORISATION_PAYMENTS": "INITIATE_PRE_AUTHORISATION_PAYMENTS",
    /**
     * value: "INITIATE_ACCOUNT_REQUEST"
     * @const
     */
    "INITIATE_ACCOUNT_REQUEST": "INITIATE_ACCOUNT_REQUEST",
    /**
     * value: "INITIATE_EMBEDDED_ACCOUNT_REQUEST"
     * @const
     */
    "INITIATE_EMBEDDED_ACCOUNT_REQUEST": "INITIATE_EMBEDDED_ACCOUNT_REQUEST",
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
     * value: "INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT"
     * @const
     */
    "INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT": "INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT",
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
     * value: "INITIATE_EMBEDDED_BULK_PAYMENT"
     * @const
     */
    "INITIATE_EMBEDDED_BULK_PAYMENT": "INITIATE_EMBEDDED_BULK_PAYMENT",
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
    "OPEN_DATA_ATMS": "OPEN_DATA_ATMS",
    /**
     * value: "READ_DOMESTIC_SINGLE_REFUND"
     * @const
     */
    "READ_DOMESTIC_SINGLE_REFUND": "READ_DOMESTIC_SINGLE_REFUND",
    /**
     * value: "READ_DOMESTIC_SCHEDULED_REFUND"
     * @const
     */
    "READ_DOMESTIC_SCHEDULED_REFUND": "READ_DOMESTIC_SCHEDULED_REFUND",
    /**
     * value: "READ_DOMESTIC_PERIODIC_PAYMENT_REFUND"
     * @const
     */
    "READ_DOMESTIC_PERIODIC_PAYMENT_REFUND": "READ_DOMESTIC_PERIODIC_PAYMENT_REFUND",
    /**
     * value: "READ_INTERNATIONAL_SINGLE_REFUND"
     * @const
     */
    "READ_INTERNATIONAL_SINGLE_REFUND": "READ_INTERNATIONAL_SINGLE_REFUND",
    /**
     * value: "READ_INTERNATIONAL_SCHEDULED_REFUND"
     * @const
     */
    "READ_INTERNATIONAL_SCHEDULED_REFUND": "READ_INTERNATIONAL_SCHEDULED_REFUND",
    /**
     * value: "ACCOUNT_BENEFICIARIES"
     * @const
     */
    "ACCOUNT_BENEFICIARIES": "ACCOUNT_BENEFICIARIES"  };


  return exports;
}));


