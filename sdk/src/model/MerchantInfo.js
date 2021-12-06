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
    define(['ApiClient', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.MerchantInfo = factory(root.YapilyApi.ApiClient, root.YapilyApi.Address);
  }
}(this, function(ApiClient, Address) {
  'use strict';



  /**
   * The MerchantInfo model module.
   * @module model/MerchantInfo
   * @version 1.213.0
   */

  /**
   * Constructs a new <code>MerchantInfo</code>.
   * @alias module:model/MerchantInfo
   * @class
   * @param categoryCode {String} 
   * @param customerId {String} 
   * @param address {module:model/Address} 
   */
  var exports = function(categoryCode, customerId, address) {
    var _this = this;

    _this['categoryCode'] = categoryCode;
    _this['customerId'] = customerId;
    _this['address'] = address;
  };

  /**
   * Constructs a <code>MerchantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantInfo} obj Optional instance to populate.
   * @return {module:model/MerchantInfo} The populated <code>MerchantInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'String');
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
    }
    return obj;
  }

  /**
   * @member {String} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));


