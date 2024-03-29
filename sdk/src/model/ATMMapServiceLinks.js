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
    root.YapilyApi.ATMMapServiceLinks = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ATMMapServiceLinks model module.
   * @module model/ATMMapServiceLinks
   * @version 1.259.0
   */

  /**
   * Constructs a new <code>ATMMapServiceLinks</code>.
   * Links on popular map services pointing the ATM Location on the earth.
   * @alias module:model/ATMMapServiceLinks
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ATMMapServiceLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMMapServiceLinks} obj Optional instance to populate.
   * @return {module:model/ATMMapServiceLinks} The populated <code>ATMMapServiceLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bingMapsUrl')) {
        obj['bingMapsUrl'] = ApiClient.convertToType(data['bingMapsUrl'], 'String');
      }
      if (data.hasOwnProperty('googleMapsUrl')) {
        obj['googleMapsUrl'] = ApiClient.convertToType(data['googleMapsUrl'], 'String');
      }
      if (data.hasOwnProperty('hereMapsUrl')) {
        obj['hereMapsUrl'] = ApiClient.convertToType(data['hereMapsUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} bingMapsUrl
   */
  exports.prototype['bingMapsUrl'] = undefined;
  /**
   * @member {String} googleMapsUrl
   */
  exports.prototype['googleMapsUrl'] = undefined;
  /**
   * @member {String} hereMapsUrl
   */
  exports.prototype['hereMapsUrl'] = undefined;



  return exports;
}));


