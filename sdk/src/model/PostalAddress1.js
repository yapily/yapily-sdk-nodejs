/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.190
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
    define(['ApiClient', 'model/GeoLocation1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoLocation1'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PostalAddress1 = factory(root.YapilyApi.ApiClient, root.YapilyApi.GeoLocation1);
  }
}(this, function(ApiClient, GeoLocation1) {
  'use strict';



  /**
   * The PostalAddress1 model module.
   * @module model/PostalAddress1
   * @version 0.0.190
   */

  /**
   * Constructs a new <code>PostalAddress1</code>.
   * Information that locates and identifies a specific address, as defined by postal services or in free format text.
   * @alias module:model/PostalAddress1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PostalAddress1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostalAddress1} obj Optional instance to populate.
   * @return {module:model/PostalAddress1} The populated <code>PostalAddress1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AddressLine')) {
        obj['AddressLine'] = ApiClient.convertToType(data['AddressLine'], ['String']);
      }
      if (data.hasOwnProperty('BuildingNumber')) {
        obj['BuildingNumber'] = ApiClient.convertToType(data['BuildingNumber'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('CountrySubDivision')) {
        obj['CountrySubDivision'] = ApiClient.convertToType(data['CountrySubDivision'], ['String']);
      }
      if (data.hasOwnProperty('GeoLocation')) {
        obj['GeoLocation'] = GeoLocation1.constructFromObject(data['GeoLocation']);
      }
      if (data.hasOwnProperty('PostCode')) {
        obj['PostCode'] = ApiClient.convertToType(data['PostCode'], 'String');
      }
      if (data.hasOwnProperty('StreetName')) {
        obj['StreetName'] = ApiClient.convertToType(data['StreetName'], 'String');
      }
      if (data.hasOwnProperty('TownName')) {
        obj['TownName'] = ApiClient.convertToType(data['TownName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} AddressLine
   */
  exports.prototype['AddressLine'] = undefined;
  /**
   * @member {String} BuildingNumber
   */
  exports.prototype['BuildingNumber'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {Array.<String>} CountrySubDivision
   */
  exports.prototype['CountrySubDivision'] = undefined;
  /**
   * @member {module:model/GeoLocation1} GeoLocation
   */
  exports.prototype['GeoLocation'] = undefined;
  /**
   * @member {String} PostCode
   */
  exports.prototype['PostCode'] = undefined;
  /**
   * @member {String} StreetName
   */
  exports.prototype['StreetName'] = undefined;
  /**
   * @member {String} TownName
   */
  exports.prototype['TownName'] = undefined;



  return exports;
}));


