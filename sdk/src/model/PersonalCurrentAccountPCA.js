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
    define(['ApiClient', 'model/PersonalCurrentAccountPCAMarketingState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonalCurrentAccountPCAMarketingState'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PersonalCurrentAccountPCA = factory(root.YapilyApi.ApiClient, root.YapilyApi.PersonalCurrentAccountPCAMarketingState);
  }
}(this, function(ApiClient, PersonalCurrentAccountPCAMarketingState) {
  'use strict';



  /**
   * The PersonalCurrentAccountPCA model module.
   * @module model/PersonalCurrentAccountPCA
   * @version 1.251.1
   */

  /**
   * Constructs a new <code>PersonalCurrentAccountPCA</code>.
   * @alias module:model/PersonalCurrentAccountPCA
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PersonalCurrentAccountPCA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalCurrentAccountPCA} obj Optional instance to populate.
   * @return {module:model/PersonalCurrentAccountPCA} The populated <code>PersonalCurrentAccountPCA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('PCAMarketingState')) {
        obj['PCAMarketingState'] = ApiClient.convertToType(data['PCAMarketingState'], [PersonalCurrentAccountPCAMarketingState]);
      }
      if (data.hasOwnProperty('Segment')) {
        obj['Segment'] = ApiClient.convertToType(data['Segment'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<module:model/PersonalCurrentAccountPCAMarketingState>} PCAMarketingState
   */
  exports.prototype['PCAMarketingState'] = undefined;
  /**
   * @member {Array.<String>} Segment
   */
  exports.prototype['Segment'] = undefined;



  return exports;
}));


