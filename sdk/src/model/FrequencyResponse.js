/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.242
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
    root.YapilyApi.FrequencyResponse = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FrequencyResponse model module.
   * @module model/FrequencyResponse
   * @version 0.0.242
   */

  /**
   * Constructs a new <code>FrequencyResponse</code>.
   * @alias module:model/FrequencyResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FrequencyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FrequencyResponse} obj Optional instance to populate.
   * @return {module:model/FrequencyResponse} The populated <code>FrequencyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('executionDay')) {
        obj['executionDay'] = ApiClient.convertToType(data['executionDay'], 'Number');
      }
      if (data.hasOwnProperty('frequencyType')) {
        obj['frequencyType'] = ApiClient.convertToType(data['frequencyType'], 'String');
      }
      if (data.hasOwnProperty('intervalMonth')) {
        obj['intervalMonth'] = ApiClient.convertToType(data['intervalMonth'], 'Number');
      }
      if (data.hasOwnProperty('intervalWeek')) {
        obj['intervalWeek'] = ApiClient.convertToType(data['intervalWeek'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} executionDay
   */
  exports.prototype['executionDay'] = undefined;
  /**
   * @member {module:model/FrequencyResponse.FrequencyTypeEnum} frequencyType
   */
  exports.prototype['frequencyType'] = undefined;
  /**
   * @member {Number} intervalMonth
   */
  exports.prototype['intervalMonth'] = undefined;
  /**
   * @member {Number} intervalWeek
   */
  exports.prototype['intervalWeek'] = undefined;


  /**
   * Allowed values for the <code>frequencyType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyTypeEnum = {
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


