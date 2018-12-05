/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.49
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
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
    root.YapilyApi.ATMOpenDataOtherATMServices = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ATMOpenDataOtherATMServices model module.
   * @module model/ATMOpenDataOtherATMServices
   * @version 0.0.49
   */

  /**
   * Constructs a new <code>ATMOpenDataOtherATMServices</code>.
   * Enter a new code , name and description for any other ATM Service
   * @alias module:model/ATMOpenDataOtherATMServices
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ATMOpenDataOtherATMServices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMOpenDataOtherATMServices} obj Optional instance to populate.
   * @return {module:model/ATMOpenDataOtherATMServices} The populated <code>ATMOpenDataOtherATMServices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;



  return exports;
}));


