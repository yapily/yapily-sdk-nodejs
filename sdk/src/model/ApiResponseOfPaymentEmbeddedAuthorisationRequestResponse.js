/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.309
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
    define(['ApiClient', 'model/PaymentEmbeddedAuthorisationRequestResponse', 'model/ResponseMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentEmbeddedAuthorisationRequestResponse'), require('./ResponseMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.PaymentEmbeddedAuthorisationRequestResponse, root.YapilyApi.ResponseMeta);
  }
}(this, function(ApiClient, PaymentEmbeddedAuthorisationRequestResponse, ResponseMeta) {
  'use strict';



  /**
   * The ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse model module.
   * @module model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse
   * @version 0.0.309
   */

  /**
   * Constructs a new <code>ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse</code>.
   * @alias module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} obj Optional instance to populate.
   * @return {module:model/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse} The populated <code>ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = PaymentEmbeddedAuthorisationRequestResponse.constructFromObject(data['data']);
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
   * @member {module:model/PaymentEmbeddedAuthorisationRequestResponse} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


