/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.311
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
    define(['ApiClient', 'model/Category'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Categorisation = factory(root.YapilyApi.ApiClient, root.YapilyApi.Category);
  }
}(this, function(ApiClient, Category) {
  'use strict';



  /**
   * The Categorisation model module.
   * @module model/Categorisation
   * @version 0.0.311
   */

  /**
   * Constructs a new <code>Categorisation</code>.
   * @alias module:model/Categorisation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Categorisation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Categorisation} obj Optional instance to populate.
   * @return {module:model/Categorisation} The populated <code>Categorisation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('category')) {
        obj['category'] = Category.constructFromObject(data['category']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Category} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


