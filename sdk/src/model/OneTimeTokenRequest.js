/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.322
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
    root.YapilyApi.OneTimeTokenRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OneTimeTokenRequest model module.
   * @module model/OneTimeTokenRequest
   * @version 0.0.322
   */

  /**
   * Constructs a new <code>OneTimeTokenRequest</code>.
   * @alias module:model/OneTimeTokenRequest
   * @class
   * @param oneTimeToken {String} 
   */
  var exports = function(oneTimeToken) {
    var _this = this;

    _this['oneTimeToken'] = oneTimeToken;
  };

  /**
   * Constructs a <code>OneTimeTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneTimeTokenRequest} obj Optional instance to populate.
   * @return {module:model/OneTimeTokenRequest} The populated <code>OneTimeTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('oneTimeToken')) {
        obj['oneTimeToken'] = ApiClient.convertToType(data['oneTimeToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oneTimeToken
   */
  exports.prototype['oneTimeToken'] = undefined;



  return exports;
}));


