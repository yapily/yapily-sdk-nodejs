/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.38
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
    define(['ApiClient', 'model/SortCodePaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SortCodePaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.SortCodePaymentAuthRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.SortCodePaymentRequest);
  }
}(this, function(ApiClient, SortCodePaymentRequest) {
  'use strict';




  /**
   * The SortCodePaymentAuthRequest model module.
   * @module model/SortCodePaymentAuthRequest
   * @version 0.0.38
   */

  /**
   * Constructs a new <code>SortCodePaymentAuthRequest</code>.
   * @alias module:model/SortCodePaymentAuthRequest
   * @class
   * @param userUuid {String} 
   * @param institutionId {String} 
   * @param callback {String} 
   * @param paymentRequest {module:model/SortCodePaymentRequest} 
   */
  var exports = function(userUuid, institutionId, callback, paymentRequest) {
    var _this = this;

    _this['userUuid'] = userUuid;
    _this['institutionId'] = institutionId;
    _this['callback'] = callback;
    _this['paymentRequest'] = paymentRequest;
  };

  /**
   * Constructs a <code>SortCodePaymentAuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SortCodePaymentAuthRequest} obj Optional instance to populate.
   * @return {module:model/SortCodePaymentAuthRequest} The populated <code>SortCodePaymentAuthRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userUuid')) {
        obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
      if (data.hasOwnProperty('callback')) {
        obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
      }
      if (data.hasOwnProperty('paymentRequest')) {
        obj['paymentRequest'] = SortCodePaymentRequest.constructFromObject(data['paymentRequest']);
      }
    }
    return obj;
  }

  /**
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {String} callback
   */
  exports.prototype['callback'] = undefined;
  /**
   * @member {module:model/SortCodePaymentRequest} paymentRequest
   */
  exports.prototype['paymentRequest'] = undefined;



  return exports;
}));


