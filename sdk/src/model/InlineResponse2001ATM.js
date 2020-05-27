/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.190
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
    define(['ApiClient', 'model/Branch', 'model/InlineResponse2001OtherATMServices', 'model/InlineResponse2001OtherAccessibility', 'model/Location'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Branch'), require('./InlineResponse2001OtherATMServices'), require('./InlineResponse2001OtherAccessibility'), require('./Location'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.InlineResponse2001ATM = factory(root.YapilyApi.ApiClient, root.YapilyApi.Branch, root.YapilyApi.InlineResponse2001OtherATMServices, root.YapilyApi.InlineResponse2001OtherAccessibility, root.YapilyApi.Location);
  }
}(this, function(ApiClient, Branch, InlineResponse2001OtherATMServices, InlineResponse2001OtherAccessibility, Location) {
  'use strict';



  /**
   * The InlineResponse2001ATM model module.
   * @module model/InlineResponse2001ATM
   * @version 0.0.190
   */

  /**
   * Constructs a new <code>InlineResponse2001ATM</code>.
   * ATM information.
   * @alias module:model/InlineResponse2001ATM
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse2001ATM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001ATM} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001ATM} The populated <code>InlineResponse2001ATM</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ATMServices')) {
        obj['ATMServices'] = ApiClient.convertToType(data['ATMServices'], ['String']);
      }
      if (data.hasOwnProperty('Access24HoursIndicator')) {
        obj['Access24HoursIndicator'] = ApiClient.convertToType(data['Access24HoursIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('Accessibility')) {
        obj['Accessibility'] = ApiClient.convertToType(data['Accessibility'], ['String']);
      }
      if (data.hasOwnProperty('Branch')) {
        obj['Branch'] = Branch.constructFromObject(data['Branch']);
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Location')) {
        obj['Location'] = Location.constructFromObject(data['Location']);
      }
      if (data.hasOwnProperty('MinimumPossibleAmount')) {
        obj['MinimumPossibleAmount'] = ApiClient.convertToType(data['MinimumPossibleAmount'], 'String');
      }
      if (data.hasOwnProperty('Note')) {
        obj['Note'] = ApiClient.convertToType(data['Note'], ['String']);
      }
      if (data.hasOwnProperty('OtherATMServices')) {
        obj['OtherATMServices'] = ApiClient.convertToType(data['OtherATMServices'], [InlineResponse2001OtherATMServices]);
      }
      if (data.hasOwnProperty('OtherAccessibility')) {
        obj['OtherAccessibility'] = ApiClient.convertToType(data['OtherAccessibility'], [InlineResponse2001OtherAccessibility]);
      }
      if (data.hasOwnProperty('SupportedCurrencies')) {
        obj['SupportedCurrencies'] = ApiClient.convertToType(data['SupportedCurrencies'], ['String']);
      }
      if (data.hasOwnProperty('SupportedLanguages')) {
        obj['SupportedLanguages'] = ApiClient.convertToType(data['SupportedLanguages'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2001ATM.ATMServicesEnum>} ATMServices
   */
  exports.prototype['ATMServices'] = undefined;
  /**
   * @member {Boolean} Access24HoursIndicator
   */
  exports.prototype['Access24HoursIndicator'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2001ATM.AccessibilityEnum>} Accessibility
   */
  exports.prototype['Accessibility'] = undefined;
  /**
   * @member {module:model/Branch} Branch
   */
  exports.prototype['Branch'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {module:model/Location} Location
   */
  exports.prototype['Location'] = undefined;
  /**
   * @member {String} MinimumPossibleAmount
   */
  exports.prototype['MinimumPossibleAmount'] = undefined;
  /**
   * @member {Array.<String>} Note
   */
  exports.prototype['Note'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2001OtherATMServices>} OtherATMServices
   */
  exports.prototype['OtherATMServices'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2001OtherAccessibility>} OtherAccessibility
   */
  exports.prototype['OtherAccessibility'] = undefined;
  /**
   * @member {Array.<String>} SupportedCurrencies
   */
  exports.prototype['SupportedCurrencies'] = undefined;
  /**
   * @member {Array.<String>} SupportedLanguages
   */
  exports.prototype['SupportedLanguages'] = undefined;


  /**
   * Allowed values for the <code>aTMServices</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ATMServicesEnum = {
    /**
     * value: "Balance"
     * @const
     */
    "Balance": "Balance",
    /**
     * value: "BillPayments"
     * @const
     */
    "BillPayments": "BillPayments",
    /**
     * value: "CashDeposits"
     * @const
     */
    "CashDeposits": "CashDeposits",
    /**
     * value: "CharityDonation"
     * @const
     */
    "CharityDonation": "CharityDonation",
    /**
     * value: "ChequeDeposits"
     * @const
     */
    "ChequeDeposits": "ChequeDeposits",
    /**
     * value: "CashWithdrawal"
     * @const
     */
    "CashWithdrawal": "CashWithdrawal",
    /**
     * value: "EnvelopeDeposit"
     * @const
     */
    "EnvelopeDeposit": "EnvelopeDeposit",
    /**
     * value: "FastCash"
     * @const
     */
    "FastCash": "FastCash",
    /**
     * value: "MobileBankingRegistration"
     * @const
     */
    "MobileBankingRegistration": "MobileBankingRegistration",
    /**
     * value: "MobilePaymentRegistration"
     * @const
     */
    "MobilePaymentRegistration": "MobilePaymentRegistration",
    /**
     * value: "MobilePhoneTopUp"
     * @const
     */
    "MobilePhoneTopUp": "MobilePhoneTopUp",
    /**
     * value: "OrderStatement"
     * @const
     */
    "OrderStatement": "OrderStatement",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "PINActivation"
     * @const
     */
    "PINActivation": "PINActivation",
    /**
     * value: "PINChange"
     * @const
     */
    "PINChange": "PINChange",
    /**
     * value: "PINUnblock"
     * @const
     */
    "PINUnblock": "PINUnblock",
    /**
     * value: "MiniStatement"
     * @const
     */
    "MiniStatement": "MiniStatement"  };

  /**
   * Allowed values for the <code>accessibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessibilityEnum = {
    /**
     * value: "AudioCashMachine"
     * @const
     */
    "AudioCashMachine": "AudioCashMachine",
    /**
     * value: "AutomaticDoors"
     * @const
     */
    "AutomaticDoors": "AutomaticDoors",
    /**
     * value: "ExternalRamp"
     * @const
     */
    "ExternalRamp": "ExternalRamp",
    /**
     * value: "InductionLoop"
     * @const
     */
    "InductionLoop": "InductionLoop",
    /**
     * value: "InternalRamp"
     * @const
     */
    "InternalRamp": "InternalRamp",
    /**
     * value: "LevelAccess"
     * @const
     */
    "LevelAccess": "LevelAccess",
    /**
     * value: "LowerLevelCounter"
     * @const
     */
    "LowerLevelCounter": "LowerLevelCounter",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "WheelchairAccess"
     * @const
     */
    "WheelchairAccess": "WheelchairAccess"  };


  return exports;
}));


