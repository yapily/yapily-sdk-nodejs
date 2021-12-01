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
    define(['ApiClient', 'model/BeneficiaryPayee'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeneficiaryPayee'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Beneficiary = factory(root.YapilyApi.ApiClient, root.YapilyApi.BeneficiaryPayee);
  }
}(this, function(ApiClient, BeneficiaryPayee) {
  'use strict';



  /**
   * The Beneficiary model module.
   * @module model/Beneficiary
   * @version 1.207.0
   */

  /**
   * Constructs a new <code>Beneficiary</code>.
   * @alias module:model/Beneficiary
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Beneficiary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Beneficiary} obj Optional instance to populate.
   * @return {module:model/Beneficiary} The populated <code>Beneficiary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('trusted')) {
        obj['trusted'] = ApiClient.convertToType(data['trusted'], 'Boolean');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('payee')) {
        obj['payee'] = BeneficiaryPayee.constructFromObject(data['payee']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} trusted
   */
  exports.prototype['trusted'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {module:model/BeneficiaryPayee} payee
   */
  exports.prototype['payee'] = undefined;



  return exports;
}));


