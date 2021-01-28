/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.302
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
    define(['ApiClient', 'model/GeographicCoordinates1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeographicCoordinates1'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.GeoLocation1 = factory(root.YapilyApi.ApiClient, root.YapilyApi.GeographicCoordinates1);
  }
}(this, function(ApiClient, GeographicCoordinates1) {
  'use strict';



  /**
   * The GeoLocation1 model module.
   * @module model/GeoLocation1
   * @version 0.0.302
   */

  /**
   * Constructs a new <code>GeoLocation1</code>.
   * Geographic location of the ATM specified by geographic coordinates or UTM coordinates.
   * @alias module:model/GeoLocation1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GeoLocation1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoLocation1} obj Optional instance to populate.
   * @return {module:model/GeoLocation1} The populated <code>GeoLocation1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('GeographicCoordinates')) {
        obj['GeographicCoordinates'] = GeographicCoordinates1.constructFromObject(data['GeographicCoordinates']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GeographicCoordinates1} GeographicCoordinates
   */
  exports.prototype['GeographicCoordinates'] = undefined;



  return exports;
}));


