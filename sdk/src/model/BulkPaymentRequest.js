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
    define(['ApiClient', 'model/PaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.BulkPaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.PaymentRequest);
  }
}(this, function(ApiClient, PaymentRequest) {
  'use strict';



  /**
   * The BulkPaymentRequest model module.
   * @module model/BulkPaymentRequest
   * @version 1.193.0
   */

  /**
   * Constructs a new <code>BulkPaymentRequest</code>.
   * @alias module:model/BulkPaymentRequest
   * @class
   * @param payments {Array.<module:model/PaymentRequest>} 
   */
  var exports = function(payments) {
    var _this = this;

    _this['payments'] = payments;
  };

  /**
   * Constructs a <code>BulkPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkPaymentRequest} obj Optional instance to populate.
   * @return {module:model/BulkPaymentRequest} The populated <code>BulkPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('executionDateTime')) {
        obj['executionDateTime'] = ApiClient.convertToType(data['executionDateTime'], 'Date');
      }
      if (data.hasOwnProperty('originatorIdentificationNumber')) {
        obj['originatorIdentificationNumber'] = ApiClient.convertToType(data['originatorIdentificationNumber'], 'String');
      }
      if (data.hasOwnProperty('payments')) {
        obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentRequest]);
      }
    }
    return obj;
  }

  /**
   * Execution datetime for the bulk payments
   * @member {Date} executionDateTime
   */
  exports.prototype['executionDateTime'] = undefined;
  /**
   * Required field for AIB bulk payments
   * @member {String} originatorIdentificationNumber
   */
  exports.prototype['originatorIdentificationNumber'] = undefined;
  /**
   * @member {Array.<module:model/PaymentRequest>} payments
   */
  exports.prototype['payments'] = undefined;



  return exports;
}));


