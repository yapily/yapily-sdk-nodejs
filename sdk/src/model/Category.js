/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.87.0
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
    define(['ApiClient', 'model/Subcategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subcategory'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Category = factory(root.YapilyApi.ApiClient, root.YapilyApi.Subcategory);
  }
}(this, function(ApiClient, Subcategory) {
  'use strict';



  /**
   * The Category model module.
   * @module model/Category
   * @version 1.87.0
   */

  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('subcategories')) {
        obj['subcategories'] = ApiClient.convertToType(data['subcategories'], [Subcategory]);
      }
    }
    return obj;
  }

  /**
   * Category ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Category label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Category country
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {Array.<module:model/Subcategory>} subcategories
   */
  exports.prototype['subcategories'] = undefined;



  return exports;
}));


