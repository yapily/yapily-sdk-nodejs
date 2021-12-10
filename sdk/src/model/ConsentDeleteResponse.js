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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ConsentDeleteResponse = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ConsentDeleteResponse model module.
   * @module model/ConsentDeleteResponse
   * @version 1.219.0
   */

  /**
   * Constructs a new <code>ConsentDeleteResponse</code>.
   * @alias module:model/ConsentDeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ConsentDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsentDeleteResponse} obj Optional instance to populate.
   * @return {module:model/ConsentDeleteResponse} The populated <code>ConsentDeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('deleteStatus')) {
        obj['deleteStatus'] = ApiClient.convertToType(data['deleteStatus'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('institutionConsentId')) {
        obj['institutionConsentId'] = ApiClient.convertToType(data['institutionConsentId'], 'String');
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {module:model/ConsentDeleteResponse.DeleteStatusEnum} deleteStatus
   */
  exports.prototype['deleteStatus'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} institutionConsentId
   */
  exports.prototype['institutionConsentId'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;


  /**
   * Allowed values for the <code>deleteStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeleteStatusEnum = {
    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


  return exports;
}));


