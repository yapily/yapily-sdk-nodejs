/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.192
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
    define(['ApiClient', 'model/AccountBalance', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountBalance'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Balances = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountBalance, root.YapilyApi.Amount);
  }
}(this, function(ApiClient, AccountBalance, Amount) {
  'use strict';



  /**
   * The Balances model module.
   * @module model/Balances
   * @version 0.0.192
   */

  /**
   * Constructs a new <code>Balances</code>.
   * @alias module:model/Balances
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Balances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Balances} obj Optional instance to populate.
   * @return {module:model/Balances} The populated <code>Balances</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mainBalanceAmount')) {
        obj['mainBalanceAmount'] = Amount.constructFromObject(data['mainBalanceAmount']);
      }
      if (data.hasOwnProperty('balances')) {
        obj['balances'] = ApiClient.convertToType(data['balances'], [AccountBalance]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} mainBalanceAmount
   */
  exports.prototype['mainBalanceAmount'] = undefined;
  /**
   * @member {Array.<module:model/AccountBalance>} balances
   */
  exports.prototype['balances'] = undefined;



  return exports;
}));


