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
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ChargeDetails = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The ChargeDetails model module.
   * @module model/ChargeDetails
   * @version 1.219.0
   */

  /**
   * Constructs a new <code>ChargeDetails</code>.
   * @alias module:model/ChargeDetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ChargeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChargeDetails} obj Optional instance to populate.
   * @return {module:model/ChargeDetails} The populated <code>ChargeDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chargeAmount')) {
        obj['chargeAmount'] = Amount.constructFromObject(data['chargeAmount']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} chargeAmount
   */
  exports.prototype['chargeAmount'] = undefined;



  return exports;
}));


