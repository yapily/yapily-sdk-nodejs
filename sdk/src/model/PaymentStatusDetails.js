/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.215
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
    define(['ApiClient', 'model/MultiAuthorisation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MultiAuthorisation'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentStatusDetails = factory(root.YapilyApi.ApiClient, root.YapilyApi.MultiAuthorisation);
  }
}(this, function(ApiClient, MultiAuthorisation) {
  'use strict';



  /**
   * The PaymentStatusDetails model module.
   * @module model/PaymentStatusDetails
   * @version 0.0.215
   */

  /**
   * Constructs a new <code>PaymentStatusDetails</code>.
   * @alias module:model/PaymentStatusDetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PaymentStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentStatusDetails} obj Optional instance to populate.
   * @return {module:model/PaymentStatusDetails} The populated <code>PaymentStatusDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusReason')) {
        obj['statusReason'] = ApiClient.convertToType(data['statusReason'], 'String');
      }
      if (data.hasOwnProperty('statusReasonDescription')) {
        obj['statusReasonDescription'] = ApiClient.convertToType(data['statusReasonDescription'], 'String');
      }
      if (data.hasOwnProperty('statusUpdateDate')) {
        obj['statusUpdateDate'] = ApiClient.convertToType(data['statusUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('multiAuthorisationStatus')) {
        obj['multiAuthorisationStatus'] = MultiAuthorisation.constructFromObject(data['multiAuthorisationStatus']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentStatusDetails.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} statusReason
   */
  exports.prototype['statusReason'] = undefined;
  /**
   * @member {String} statusReasonDescription
   */
  exports.prototype['statusReasonDescription'] = undefined;
  /**
   * @member {Date} statusUpdateDate
   */
  exports.prototype['statusUpdateDate'] = undefined;
  /**
   * @member {module:model/MultiAuthorisation} multiAuthorisationStatus
   */
  exports.prototype['multiAuthorisationStatus'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "COMPLETED_SETTLEMENT_IN_PROCESS"
     * @const
     */
    "COMPLETED_SETTLEMENT_IN_PROCESS": "COMPLETED_SETTLEMENT_IN_PROCESS",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE"  };


  return exports;
}));


