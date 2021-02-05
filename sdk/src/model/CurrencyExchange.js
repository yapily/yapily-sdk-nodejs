/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.306
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
    root.YapilyApi.CurrencyExchange = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CurrencyExchange model module.
   * @module model/CurrencyExchange
   * @version 0.0.306
   */

  /**
   * Constructs a new <code>CurrencyExchange</code>.
   * @alias module:model/CurrencyExchange
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CurrencyExchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyExchange} obj Optional instance to populate.
   * @return {module:model/CurrencyExchange} The populated <code>CurrencyExchange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sourceCurrency')) {
        obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
      }
      if (data.hasOwnProperty('targetCurrency')) {
        obj['targetCurrency'] = ApiClient.convertToType(data['targetCurrency'], 'String');
      }
      if (data.hasOwnProperty('unitCurrency')) {
        obj['unitCurrency'] = ApiClient.convertToType(data['unitCurrency'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * ISO 4217 currency code denoting the currency of the creditor
   * @member {String} sourceCurrency
   */
  exports.prototype['sourceCurrency'] = undefined;
  /**
   * ISO 4217 currency code denoting the currency of the debtor
   * @member {String} targetCurrency
   */
  exports.prototype['targetCurrency'] = undefined;
  /**
   * ISO 4217 currency code denoting the currency used to set the exchange rate (GBP is the unit currency in the conversion of 1 GBP = x CUR)
   * @member {String} unitCurrency
   */
  exports.prototype['unitCurrency'] = undefined;
  /**
   * Currency exchange rate
   * @member {Number} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;



  return exports;
}));


