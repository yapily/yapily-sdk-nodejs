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
    define(['ApiClient', 'model/PersonalCurrentAccountBrand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonalCurrentAccountBrand'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PersonalCurrentAccountData = factory(root.YapilyApi.ApiClient, root.YapilyApi.PersonalCurrentAccountBrand);
  }
}(this, function(ApiClient, PersonalCurrentAccountBrand) {
  'use strict';



  /**
   * The PersonalCurrentAccountData model module.
   * @module model/PersonalCurrentAccountData
   * @version 1.259.0
   */

  /**
   * Constructs a new <code>PersonalCurrentAccountData</code>.
   * @alias module:model/PersonalCurrentAccountData
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PersonalCurrentAccountData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalCurrentAccountData} obj Optional instance to populate.
   * @return {module:model/PersonalCurrentAccountData} The populated <code>PersonalCurrentAccountData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Brand')) {
        obj['Brand'] = ApiClient.convertToType(data['Brand'], [PersonalCurrentAccountBrand]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PersonalCurrentAccountBrand>} Brand
   */
  exports.prototype['Brand'] = undefined;



  return exports;
}));


