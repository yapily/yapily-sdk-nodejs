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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Merchant = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Merchant model module.
   * @module model/Merchant
   * @version 1.214.0
   */

  /**
   * Constructs a new <code>Merchant</code>.
   * @alias module:model/Merchant
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Merchant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Merchant} obj Optional instance to populate.
   * @return {module:model/Merchant} The populated <code>Merchant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('merchantName')) {
        obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
      }
      if (data.hasOwnProperty('merchantCategoryCode')) {
        obj['merchantCategoryCode'] = ApiClient.convertToType(data['merchantCategoryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} merchantName
   */
  exports.prototype['merchantName'] = undefined;
  /**
   * @member {String} merchantCategoryCode
   */
  exports.prototype['merchantCategoryCode'] = undefined;



  return exports;
}));


