/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.318
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
    define(['ApiClient', 'model/Institution', 'model/Media'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Institution'), require('./Media'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Application = factory(root.YapilyApi.ApiClient, root.YapilyApi.Institution, root.YapilyApi.Media);
  }
}(this, function(ApiClient, Institution, Media) {
  'use strict';



  /**
   * The Application model module.
   * @module model/Application
   * @version 0.0.318
   */

  /**
   * Constructs a new <code>Application</code>.
   * @alias module:model/Application
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Application} obj Optional instance to populate.
   * @return {module:model/Application} The populated <code>Application</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('authCallbacks')) {
        obj['authCallbacks'] = ApiClient.convertToType(data['authCallbacks'], ['String']);
      }
      if (data.hasOwnProperty('institutions')) {
        obj['institutions'] = ApiClient.convertToType(data['institutions'], [Institution]);
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Application UUID
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Array.<String>} authCallbacks
   */
  exports.prototype['authCallbacks'] = undefined;
  /**
   * @member {Array.<module:model/Institution>} institutions
   */
  exports.prototype['institutions'] = undefined;
  /**
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;



  return exports;
}));


