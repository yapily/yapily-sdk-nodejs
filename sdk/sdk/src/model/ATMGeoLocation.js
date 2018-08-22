/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.30
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
    define(['ApiClient', 'model/ATMGeographicCoordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMGeographicCoordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMGeoLocation = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMGeographicCoordinates);
  }
}(this, function(ApiClient, ATMGeographicCoordinates) {
  'use strict';




  /**
   * The ATMGeoLocation model module.
   * @module model/ATMGeoLocation
   * @version 0.0.30
   */

  /**
   * Constructs a new <code>ATMGeoLocation</code>.
   * Geographic location of the ATM specified by geographic coordinates or UTM coordinates.
   * @alias module:model/ATMGeoLocation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ATMGeoLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMGeoLocation} obj Optional instance to populate.
   * @return {module:model/ATMGeoLocation} The populated <code>ATMGeoLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('GeographicCoordinates')) {
        obj['GeographicCoordinates'] = ATMGeographicCoordinates.constructFromObject(data['GeographicCoordinates']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ATMGeographicCoordinates} GeographicCoordinates
   */
  exports.prototype['GeographicCoordinates'] = undefined;



  return exports;
}));


