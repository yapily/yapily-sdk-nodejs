/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.391
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
    define(['ApiClient', 'model/PaymentResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentResponses = factory(root.YapilyApi.ApiClient, root.YapilyApi.PaymentResponse);
  }
}(this, function(ApiClient, PaymentResponse) {
  'use strict';



  /**
   * The PaymentResponses model module.
   * @module model/PaymentResponses
   * @version 0.0.391
   */

  /**
   * Constructs a new <code>PaymentResponses</code>.
   * @alias module:model/PaymentResponses
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PaymentResponses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentResponses} obj Optional instance to populate.
   * @return {module:model/PaymentResponses} The populated <code>PaymentResponses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('payments')) {
        obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PaymentResponse>} payments
   */
  exports.prototype['payments'] = undefined;



  return exports;
}));


