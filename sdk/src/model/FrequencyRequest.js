/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.330
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
    root.YapilyApi.FrequencyRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FrequencyRequest model module.
   * @module model/FrequencyRequest
   * @version 0.0.330
   */

  /**
   * Constructs a new <code>FrequencyRequest</code>.
   * @alias module:model/FrequencyRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FrequencyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FrequencyRequest} obj Optional instance to populate.
   * @return {module:model/FrequencyRequest} The populated <code>FrequencyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('intervalWeek')) {
        obj['intervalWeek'] = ApiClient.convertToType(data['intervalWeek'], 'Number');
      }
      if (data.hasOwnProperty('intervalMonth')) {
        obj['intervalMonth'] = ApiClient.convertToType(data['intervalMonth'], 'Number');
      }
      if (data.hasOwnProperty('executionDay')) {
        obj['executionDay'] = ApiClient.convertToType(data['executionDay'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FrequencyRequest.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} intervalWeek
   */
  exports.prototype['intervalWeek'] = undefined;
  /**
   * @member {Number} intervalMonth
   */
  exports.prototype['intervalMonth'] = undefined;
  /**
   * @member {Number} executionDay
   */
  exports.prototype['executionDay'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",
    /**
     * value: "EVERY_WORKING_DAY"
     * @const
     */
    "EVERY_WORKING_DAY": "EVERY_WORKING_DAY",
    /**
     * value: "CALENDAR_DAY"
     * @const
     */
    "CALENDAR_DAY": "CALENDAR_DAY",
    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",
    /**
     * value: "EVERY_TWO_WEEKS"
     * @const
     */
    "EVERY_TWO_WEEKS": "EVERY_TWO_WEEKS",
    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY",
    /**
     * value: "EVERY_TWO_MONTHS"
     * @const
     */
    "EVERY_TWO_MONTHS": "EVERY_TWO_MONTHS",
    /**
     * value: "QUARTERLY"
     * @const
     */
    "QUARTERLY": "QUARTERLY",
    /**
     * value: "SEMIANNUAL"
     * @const
     */
    "SEMIANNUAL": "SEMIANNUAL",
    /**
     * value: "ANNUAL"
     * @const
     */
    "ANNUAL": "ANNUAL"  };


  return exports;
}));


