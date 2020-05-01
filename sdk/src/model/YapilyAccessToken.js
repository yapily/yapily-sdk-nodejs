/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.183
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
    root.YapilyApi.YapilyAccessToken = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The YapilyAccessToken model module.
   * @module model/YapilyAccessToken
   * @version 0.0.183
   */

  /**
   * Constructs a new <code>YapilyAccessToken</code>.
   * @alias module:model/YapilyAccessToken
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>YapilyAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/YapilyAccessToken} obj Optional instance to populate.
   * @return {module:model/YapilyAccessToken} The populated <code>YapilyAccessToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('jti')) {
        obj['jti'] = ApiClient.convertToType(data['jti'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {String} jti
   */
  exports.prototype['jti'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));


