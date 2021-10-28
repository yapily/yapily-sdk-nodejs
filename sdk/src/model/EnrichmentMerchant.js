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
    root.YapilyApi.EnrichmentMerchant = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EnrichmentMerchant model module.
   * @module model/EnrichmentMerchant
   * @version 1.158.0
   */

  /**
   * Constructs a new <code>EnrichmentMerchant</code>.
   * @alias module:model/EnrichmentMerchant
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EnrichmentMerchant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnrichmentMerchant} obj Optional instance to populate.
   * @return {module:model/EnrichmentMerchant} The populated <code>EnrichmentMerchant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('merchantName')) {
        obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
      }
      if (data.hasOwnProperty('parentGroup')) {
        obj['parentGroup'] = ApiClient.convertToType(data['parentGroup'], 'String');
      }
    }
    return obj;
  }

  /**
   * MerchantName
   * @member {String} merchantName
   */
  exports.prototype['merchantName'] = undefined;
  /**
   * ParentGroup
   * @member {String} parentGroup
   */
  exports.prototype['parentGroup'] = undefined;



  return exports;
}));


