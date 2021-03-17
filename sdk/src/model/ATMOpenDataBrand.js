/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.319
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
    define(['ApiClient', 'model/InlineResponse2001ATM'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001ATM'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMOpenDataBrand = factory(root.YapilyApi.ApiClient, root.YapilyApi.InlineResponse2001ATM);
  }
}(this, function(ApiClient, InlineResponse2001ATM) {
  'use strict';



  /**
   * The ATMOpenDataBrand model module.
   * @module model/ATMOpenDataBrand
   * @version 0.0.319
   */

  /**
   * Constructs a new <code>ATMOpenDataBrand</code>.
   * Brand of the Acquirer of transactions captured by the ATM
   * @alias module:model/ATMOpenDataBrand
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ATMOpenDataBrand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMOpenDataBrand} obj Optional instance to populate.
   * @return {module:model/ATMOpenDataBrand} The populated <code>ATMOpenDataBrand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ATM')) {
        obj['ATM'] = ApiClient.convertToType(data['ATM'], [InlineResponse2001ATM]);
      }
      if (data.hasOwnProperty('BrandName')) {
        obj['BrandName'] = ApiClient.convertToType(data['BrandName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2001ATM>} ATM
   */
  exports.prototype['ATM'] = undefined;
  /**
   * @member {String} BrandName
   */
  exports.prototype['BrandName'] = undefined;



  return exports;
}));


