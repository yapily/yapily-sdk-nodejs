/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.308
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
    define(['ApiClient', 'model/IdentityAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdentityAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Identity = factory(root.YapilyApi.ApiClient, root.YapilyApi.IdentityAddress);
  }
}(this, function(ApiClient, IdentityAddress) {
  'use strict';



  /**
   * The Identity model module.
   * @module model/Identity
   * @version 0.0.308
   */

  /**
   * Constructs a new <code>Identity</code>.
   * @alias module:model/Identity
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Identity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Identity} obj Optional instance to populate.
   * @return {module:model/Identity} The populated <code>Identity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('birthdate')) {
        obj['birthdate'] = ApiClient.convertToType(data['birthdate'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [IdentityAddress]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * @member {String} birthdate
   */
  exports.prototype['birthdate'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Array.<module:model/IdentityAddress>} addresses
   */
  exports.prototype['addresses'] = undefined;



  return exports;
}));


