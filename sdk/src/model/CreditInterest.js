/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.154.0
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
    define(['ApiClient', 'model/CreditInterestTierBandSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditInterestTierBandSet'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditInterest = factory(root.YapilyApi.ApiClient, root.YapilyApi.CreditInterestTierBandSet);
  }
}(this, function(ApiClient, CreditInterestTierBandSet) {
  'use strict';



  /**
   * The CreditInterest model module.
   * @module model/CreditInterest
   * @version 1.157.0
   */

  /**
   * Constructs a new <code>CreditInterest</code>.
   * Details about the interest that may be payable to the PCA account holders
   * @alias module:model/CreditInterest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreditInterest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditInterest} obj Optional instance to populate.
   * @return {module:model/CreditInterest} The populated <code>CreditInterest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TierBandSet')) {
        obj['TierBandSet'] = ApiClient.convertToType(data['TierBandSet'], [CreditInterestTierBandSet]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CreditInterestTierBandSet>} TierBandSet
   */
  exports.prototype['TierBandSet'] = undefined;



  return exports;
}));


