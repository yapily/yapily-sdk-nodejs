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
    define(['ApiClient', 'model/OverdraftOverdraftFeeChargeCap', 'model/OverdraftOverdraftFeeChargeDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OverdraftOverdraftFeeChargeCap'), require('./OverdraftOverdraftFeeChargeDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OverdraftOverdraftFeesCharges = factory(root.YapilyApi.ApiClient, root.YapilyApi.OverdraftOverdraftFeeChargeCap, root.YapilyApi.OverdraftOverdraftFeeChargeDetail);
  }
}(this, function(ApiClient, OverdraftOverdraftFeeChargeCap, OverdraftOverdraftFeeChargeDetail) {
  'use strict';



  /**
   * The OverdraftOverdraftFeesCharges model module.
   * @module model/OverdraftOverdraftFeesCharges
   * @version 1.251.2
   */

  /**
   * Constructs a new <code>OverdraftOverdraftFeesCharges</code>.
   * Overdraft fees and charges
   * @alias module:model/OverdraftOverdraftFeesCharges
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OverdraftOverdraftFeesCharges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverdraftOverdraftFeesCharges} obj Optional instance to populate.
   * @return {module:model/OverdraftOverdraftFeesCharges} The populated <code>OverdraftOverdraftFeesCharges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OverdraftFeeChargeCap')) {
        obj['OverdraftFeeChargeCap'] = ApiClient.convertToType(data['OverdraftFeeChargeCap'], [OverdraftOverdraftFeeChargeCap]);
      }
      if (data.hasOwnProperty('OverdraftFeeChargeDetail')) {
        obj['OverdraftFeeChargeDetail'] = ApiClient.convertToType(data['OverdraftFeeChargeDetail'], [OverdraftOverdraftFeeChargeDetail]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OverdraftOverdraftFeeChargeCap>} OverdraftFeeChargeCap
   */
  exports.prototype['OverdraftFeeChargeCap'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftFeeChargeDetail>} OverdraftFeeChargeDetail
   */
  exports.prototype['OverdraftFeeChargeDetail'] = undefined;



  return exports;
}));


