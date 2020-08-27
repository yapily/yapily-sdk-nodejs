/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.231
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
    root.YapilyApi.MultiAuthorisation = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MultiAuthorisation model module.
   * @module model/MultiAuthorisation
   * @version 0.0.231
   */

  /**
   * Constructs a new <code>MultiAuthorisation</code>.
   * @alias module:model/MultiAuthorisation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MultiAuthorisation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiAuthorisation} obj Optional instance to populate.
   * @return {module:model/MultiAuthorisation} The populated <code>MultiAuthorisation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('numberOfAuthorisationRequired')) {
        obj['numberOfAuthorisationRequired'] = ApiClient.convertToType(data['numberOfAuthorisationRequired'], 'Number');
      }
      if (data.hasOwnProperty('numberOfAuthorisationReceived')) {
        obj['numberOfAuthorisationReceived'] = ApiClient.convertToType(data['numberOfAuthorisationReceived'], 'Number');
      }
      if (data.hasOwnProperty('lastUpdatedDateTime')) {
        obj['lastUpdatedDateTime'] = ApiClient.convertToType(data['lastUpdatedDateTime'], 'Date');
      }
      if (data.hasOwnProperty('expirationDateTime')) {
        obj['expirationDateTime'] = ApiClient.convertToType(data['expirationDateTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} numberOfAuthorisationRequired
   */
  exports.prototype['numberOfAuthorisationRequired'] = undefined;
  /**
   * @member {Number} numberOfAuthorisationReceived
   */
  exports.prototype['numberOfAuthorisationReceived'] = undefined;
  /**
   * @member {Date} lastUpdatedDateTime
   */
  exports.prototype['lastUpdatedDateTime'] = undefined;
  /**
   * @member {Date} expirationDateTime
   */
  exports.prototype['expirationDateTime'] = undefined;



  return exports;
}));


