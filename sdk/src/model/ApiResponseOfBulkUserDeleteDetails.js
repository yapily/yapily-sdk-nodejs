/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.371
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
    define(['ApiClient', 'model/BulkUserDeleteDetails', 'model/ResponseMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkUserDeleteDetails'), require('./ResponseMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiResponseOfBulkUserDeleteDetails = factory(root.YapilyApi.ApiClient, root.YapilyApi.BulkUserDeleteDetails, root.YapilyApi.ResponseMeta);
  }
}(this, function(ApiClient, BulkUserDeleteDetails, ResponseMeta) {
  'use strict';



  /**
   * The ApiResponseOfBulkUserDeleteDetails model module.
   * @module model/ApiResponseOfBulkUserDeleteDetails
   * @version 0.0.371
   */

  /**
   * Constructs a new <code>ApiResponseOfBulkUserDeleteDetails</code>.
   * @alias module:model/ApiResponseOfBulkUserDeleteDetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApiResponseOfBulkUserDeleteDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOfBulkUserDeleteDetails} obj Optional instance to populate.
   * @return {module:model/ApiResponseOfBulkUserDeleteDetails} The populated <code>ApiResponseOfBulkUserDeleteDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = BulkUserDeleteDetails.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ResponseMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/BulkUserDeleteDetails} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


