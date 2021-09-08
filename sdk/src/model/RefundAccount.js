/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.81.0
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
    define(['ApiClient', 'model/AccountIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.RefundAccount = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountIdentification);
  }
}(this, function(ApiClient, AccountIdentification) {
  'use strict';



  /**
   * The RefundAccount model module.
   * @module model/RefundAccount
   * @version 1.81.0
   */

  /**
   * Constructs a new <code>RefundAccount</code>.
   * @alias module:model/RefundAccount
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RefundAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefundAccount} obj Optional instance to populate.
   * @return {module:model/RefundAccount} The populated <code>RefundAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('accountIdentifications')) {
        obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/AccountIdentification>} accountIdentifications
   */
  exports.prototype['accountIdentifications'] = undefined;



  return exports;
}));


