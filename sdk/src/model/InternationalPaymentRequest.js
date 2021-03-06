/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.318
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
    define(['ApiClient', 'model/ExchangeRateInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExchangeRateInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.InternationalPaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.ExchangeRateInformation);
  }
}(this, function(ApiClient, ExchangeRateInformation) {
  'use strict';



  /**
   * The InternationalPaymentRequest model module.
   * @module model/InternationalPaymentRequest
   * @version 0.0.318
   */

  /**
   * Constructs a new <code>InternationalPaymentRequest</code>.
   * @alias module:model/InternationalPaymentRequest
   * @class
   * @param currencyOfTransfer {String} 
   */
  var exports = function(currencyOfTransfer) {
    var _this = this;

    _this['currencyOfTransfer'] = currencyOfTransfer;
  };

  /**
   * Constructs a <code>InternationalPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternationalPaymentRequest} obj Optional instance to populate.
   * @return {module:model/InternationalPaymentRequest} The populated <code>InternationalPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currencyOfTransfer')) {
        obj['currencyOfTransfer'] = ApiClient.convertToType(data['currencyOfTransfer'], 'String');
      }
      if (data.hasOwnProperty('exchangeRateInformation')) {
        obj['exchangeRateInformation'] = ExchangeRateInformation.constructFromObject(data['exchangeRateInformation']);
      }
      if (data.hasOwnProperty('purpose')) {
        obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('chargeBearer')) {
        obj['chargeBearer'] = ApiClient.convertToType(data['chargeBearer'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} currencyOfTransfer
   */
  exports.prototype['currencyOfTransfer'] = undefined;
  /**
   * @member {module:model/ExchangeRateInformation} exchangeRateInformation
   */
  exports.prototype['exchangeRateInformation'] = undefined;
  /**
   * @member {String} purpose
   */
  exports.prototype['purpose'] = undefined;
  /**
   * @member {module:model/InternationalPaymentRequest.PriorityEnum} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {module:model/InternationalPaymentRequest.ChargeBearerEnum} chargeBearer
   */
  exports.prototype['chargeBearer'] = undefined;


  /**
   * Allowed values for the <code>priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriorityEnum = {
    /**
     * value: "NORMAL"
     * @const
     */
    "NORMAL": "NORMAL",
    /**
     * value: "URGENT"
     * @const
     */
    "URGENT": "URGENT"  };

  /**
   * Allowed values for the <code>chargeBearer</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChargeBearerEnum = {
    /**
     * value: "DEBT"
     * @const
     */
    "DEBT": "DEBT",
    /**
     * value: "CRED"
     * @const
     */
    "CRED": "CRED",
    /**
     * value: "SHAR"
     * @const
     */
    "SHAR": "SHAR",
    /**
     * value: "SLEV"
     * @const
     */
    "SLEV": "SLEV"  };


  return exports;
}));


