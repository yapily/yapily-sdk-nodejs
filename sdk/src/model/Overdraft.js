/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.55
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OverdraftOverdraftTierBandSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OverdraftOverdraftTierBandSet'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Overdraft = factory(root.YapilyApi.ApiClient, root.YapilyApi.OverdraftOverdraftTierBandSet);
  }
}(this, function(ApiClient, OverdraftOverdraftTierBandSet) {
  'use strict';




  /**
   * The Overdraft model module.
   * @module model/Overdraft
   * @version 0.0.55
   */

  /**
   * Constructs a new <code>Overdraft</code>.
   * Borrowing details
   * @alias module:model/Overdraft
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Overdraft</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Overdraft} obj Optional instance to populate.
   * @return {module:model/Overdraft} The populated <code>Overdraft</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
      }
      if (data.hasOwnProperty('OverdraftTierBandSet')) {
        obj['OverdraftTierBandSet'] = ApiClient.convertToType(data['OverdraftTierBandSet'], [OverdraftOverdraftTierBandSet]);
      }
      if (data.hasOwnProperty('TcsAndCsURL')) {
        obj['TcsAndCsURL'] = ApiClient.convertToType(data['TcsAndCsURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftTierBandSet>} OverdraftTierBandSet
   */
  exports.prototype['OverdraftTierBandSet'] = undefined;
  /**
   * @member {String} TcsAndCsURL
   */
  exports.prototype['TcsAndCsURL'] = undefined;



  return exports;
}));


