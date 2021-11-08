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
    root.YapilyApi.PaymentIsoStatus = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PaymentIsoStatus model module.
   * @module model/PaymentIsoStatus
   * @version 1.174.0
   */

  /**
   * Constructs a new <code>PaymentIsoStatus</code>.
   * @alias module:model/PaymentIsoStatus
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PaymentIsoStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentIsoStatus} obj Optional instance to populate.
   * @return {module:model/PaymentIsoStatus} The populated <code>PaymentIsoStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentIsoStatus.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "ACCC"
     * @const
     */
    "ACCC": "ACCC",
    /**
     * value: "ACCP"
     * @const
     */
    "ACCP": "ACCP",
    /**
     * value: "ACSC"
     * @const
     */
    "ACSC": "ACSC",
    /**
     * value: "ACSP"
     * @const
     */
    "ACSP": "ACSP",
    /**
     * value: "ACTC"
     * @const
     */
    "ACTC": "ACTC",
    /**
     * value: "ACWC"
     * @const
     */
    "ACWC": "ACWC",
    /**
     * value: "ACWP"
     * @const
     */
    "ACWP": "ACWP",
    /**
     * value: "RCVD"
     * @const
     */
    "RCVD": "RCVD",
    /**
     * value: "PDNG"
     * @const
     */
    "PDNG": "PDNG",
    /**
     * value: "RJCT"
     * @const
     */
    "RJCT": "RJCT",
    /**
     * value: "CANC"
     * @const
     */
    "CANC": "CANC",
    /**
     * value: "ACFC"
     * @const
     */
    "ACFC": "ACFC",
    /**
     * value: "PATC"
     * @const
     */
    "PATC": "PATC",
    /**
     * value: "PART"
     * @const
     */
    "PART": "PART"  };


  return exports;
}));


