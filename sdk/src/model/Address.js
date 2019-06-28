/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.118
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Address = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version 0.0.118
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   * @param addressLines {Array.<String>} 
   * @param streetName {String} 
   * @param buildingNumber {String} 
   * @param postCode {String} 
   * @param townName {String} 
   * @param county {Array.<String>} 
   * @param country {String} 
   */
  var exports = function(addressLines, streetName, buildingNumber, postCode, townName, county, country) {
    var _this = this;

    _this['addressLines'] = addressLines;
    _this['streetName'] = streetName;
    _this['buildingNumber'] = buildingNumber;
    _this['postCode'] = postCode;
    _this['townName'] = townName;
    _this['county'] = county;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressLines')) {
        obj['addressLines'] = ApiClient.convertToType(data['addressLines'], ['String']);
      }
      if (data.hasOwnProperty('streetName')) {
        obj['streetName'] = ApiClient.convertToType(data['streetName'], 'String');
      }
      if (data.hasOwnProperty('buildingNumber')) {
        obj['buildingNumber'] = ApiClient.convertToType(data['buildingNumber'], 'String');
      }
      if (data.hasOwnProperty('postCode')) {
        obj['postCode'] = ApiClient.convertToType(data['postCode'], 'String');
      }
      if (data.hasOwnProperty('townName')) {
        obj['townName'] = ApiClient.convertToType(data['townName'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], ['String']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} addressLines
   */
  exports.prototype['addressLines'] = undefined;
  /**
   * @member {String} streetName
   */
  exports.prototype['streetName'] = undefined;
  /**
   * @member {String} buildingNumber
   */
  exports.prototype['buildingNumber'] = undefined;
  /**
   * @member {String} postCode
   */
  exports.prototype['postCode'] = undefined;
  /**
   * @member {String} townName
   */
  exports.prototype['townName'] = undefined;
  /**
   * @member {Array.<String>} county
   */
  exports.prototype['county'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


