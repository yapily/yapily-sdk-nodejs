/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.294
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
    root.YapilyApi.ExchangeRateInformationResponse = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ExchangeRateInformationResponse model module.
   * @module model/ExchangeRateInformationResponse
   * @version 0.0.294
   */

  /**
   * Constructs a new <code>ExchangeRateInformationResponse</code>.
   * @alias module:model/ExchangeRateInformationResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ExchangeRateInformationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExchangeRateInformationResponse} obj Optional instance to populate.
   * @return {module:model/ExchangeRateInformationResponse} The populated <code>ExchangeRateInformationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exchangeRateExpiryDate')) {
        obj['exchangeRateExpiryDate'] = ApiClient.convertToType(data['exchangeRateExpiryDate'], 'Date');
      }
      if (data.hasOwnProperty('foreignExchangeContractReference')) {
        obj['foreignExchangeContractReference'] = ApiClient.convertToType(data['foreignExchangeContractReference'], 'String');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
      if (data.hasOwnProperty('rateType')) {
        obj['rateType'] = ApiClient.convertToType(data['rateType'], 'String');
      }
      if (data.hasOwnProperty('unitCurrency')) {
        obj['unitCurrency'] = ApiClient.convertToType(data['unitCurrency'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} exchangeRateExpiryDate
   */
  exports.prototype['exchangeRateExpiryDate'] = undefined;
  /**
   * @member {String} foreignExchangeContractReference
   */
  exports.prototype['foreignExchangeContractReference'] = undefined;
  /**
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * @member {module:model/ExchangeRateInformationResponse.RateTypeEnum} rateType
   */
  exports.prototype['rateType'] = undefined;
  /**
   * @member {String} unitCurrency
   */
  exports.prototype['unitCurrency'] = undefined;


  /**
   * Allowed values for the <code>rateType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RateTypeEnum = {
    /**
     * value: "ACTUAL"
     * @const
     */
    "ACTUAL": "ACTUAL",
    /**
     * value: "AGREED"
     * @const
     */
    "AGREED": "AGREED",
    /**
     * value: "INDICATIVE"
     * @const
     */
    "INDICATIVE": "INDICATIVE"  };


  return exports;
}));


