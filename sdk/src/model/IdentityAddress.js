/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.349
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
    root.YapilyApi.IdentityAddress = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The IdentityAddress model module.
   * @module model/IdentityAddress
   * @version 0.0.349
   */

  /**
   * Constructs a new <code>IdentityAddress</code>.
   * @alias module:model/IdentityAddress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>IdentityAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityAddress} obj Optional instance to populate.
   * @return {module:model/IdentityAddress} The populated <code>IdentityAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addressLines')) {
        obj['addressLines'] = ApiClient.convertToType(data['addressLines'], ['String']);
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('streetName')) {
        obj['streetName'] = ApiClient.convertToType(data['streetName'], 'String');
      }
      if (data.hasOwnProperty('buildingNumber')) {
        obj['buildingNumber'] = ApiClient.convertToType(data['buildingNumber'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} addressLines
   */
  exports.prototype['addressLines'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} streetName
   */
  exports.prototype['streetName'] = undefined;
  /**
   * @member {String} buildingNumber
   */
  exports.prototype['buildingNumber'] = undefined;
  /**
   * @member {module:model/IdentityAddress.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} county
   */
  exports.prototype['county'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",
    /**
     * value: "CORRESPONDENCE"
     * @const
     */
    "CORRESPONDENCE": "CORRESPONDENCE",
    /**
     * value: "DELIVERY_TO"
     * @const
     */
    "DELIVERY_TO": "DELIVERY_TO",
    /**
     * value: "MAIL_TO"
     * @const
     */
    "MAIL_TO": "MAIL_TO",
    /**
     * value: "PO_BOX"
     * @const
     */
    "PO_BOX": "PO_BOX",
    /**
     * value: "POSTAL"
     * @const
     */
    "POSTAL": "POSTAL",
    /**
     * value: "RESIDENTIAL"
     * @const
     */
    "RESIDENTIAL": "RESIDENTIAL",
    /**
     * value: "STATEMENT"
     * @const
     */
    "STATEMENT": "STATEMENT",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


