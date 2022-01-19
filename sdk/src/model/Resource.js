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
    define(['ApiClient', 'model/URL'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./URL'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Resource = factory(root.YapilyApi.ApiClient, root.YapilyApi.URL);
  }
}(this, function(ApiClient, URL) {
  'use strict';



  /**
   * The Resource model module.
   * @module model/Resource
   * @version 1.251.0
   */

  /**
   * Constructs a new <code>Resource</code>.
   * @alias module:model/Resource
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Resource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Resource} obj Optional instance to populate.
   * @return {module:model/Resource} The populated <code>Resource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = File.constructFromObject(data['file']);
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('inputStream')) {
        obj['inputStream'] = ApiClient.convertToType(data['inputStream'], Object);
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Boolean');
      }
      if (data.hasOwnProperty('readable')) {
        obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = 'String'.constructFromObject(data['uri']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = URL.constructFromObject(data['url']);
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {File} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {Object} inputStream
   */
  exports.prototype['inputStream'] = undefined;
  /**
   * @member {Boolean} open
   */
  exports.prototype['open'] = undefined;
  /**
   * @member {Boolean} readable
   */
  exports.prototype['readable'] = undefined;
  /**
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * @member {module:model/URL} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


