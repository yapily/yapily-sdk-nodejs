/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.216
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
    root.YapilyApi.File = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The File model module.
   * @module model/File
   * @version 0.0.216
   */

  /**
   * Constructs a new <code>File</code>.
   * @alias module:model/File
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/File} obj Optional instance to populate.
   * @return {module:model/File} The populated <code>File</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('absolute')) {
        obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Boolean');
      }
      if (data.hasOwnProperty('absoluteFile')) {
        obj['absoluteFile'] = ApiClient.convertToType(data['absoluteFile'], File);
      }
      if (data.hasOwnProperty('absolutePath')) {
        obj['absolutePath'] = ApiClient.convertToType(data['absolutePath'], 'String');
      }
      if (data.hasOwnProperty('canonicalFile')) {
        obj['canonicalFile'] = ApiClient.convertToType(data['canonicalFile'], File);
      }
      if (data.hasOwnProperty('canonicalPath')) {
        obj['canonicalPath'] = ApiClient.convertToType(data['canonicalPath'], 'String');
      }
      if (data.hasOwnProperty('directory')) {
        obj['directory'] = ApiClient.convertToType(data['directory'], 'Boolean');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = ApiClient.convertToType(data['file'], 'Boolean');
      }
      if (data.hasOwnProperty('freeSpace')) {
        obj['freeSpace'] = ApiClient.convertToType(data['freeSpace'], 'Number');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
      }
      if (data.hasOwnProperty('parentFile')) {
        obj['parentFile'] = ApiClient.convertToType(data['parentFile'], File);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('totalSpace')) {
        obj['totalSpace'] = ApiClient.convertToType(data['totalSpace'], 'Number');
      }
      if (data.hasOwnProperty('usableSpace')) {
        obj['usableSpace'] = ApiClient.convertToType(data['usableSpace'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} absolute
   */
  exports.prototype['absolute'] = undefined;
  /**
   * @member {File} absoluteFile
   */
  exports.prototype['absoluteFile'] = undefined;
  /**
   * @member {String} absolutePath
   */
  exports.prototype['absolutePath'] = undefined;
  /**
   * @member {File} canonicalFile
   */
  exports.prototype['canonicalFile'] = undefined;
  /**
   * @member {String} canonicalPath
   */
  exports.prototype['canonicalPath'] = undefined;
  /**
   * @member {Boolean} directory
   */
  exports.prototype['directory'] = undefined;
  /**
   * @member {Boolean} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {Number} freeSpace
   */
  exports.prototype['freeSpace'] = undefined;
  /**
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {File} parentFile
   */
  exports.prototype['parentFile'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Number} totalSpace
   */
  exports.prototype['totalSpace'] = undefined;
  /**
   * @member {Number} usableSpace
   */
  exports.prototype['usableSpace'] = undefined;



  return exports;
}));


