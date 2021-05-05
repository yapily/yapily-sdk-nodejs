/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.337
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
    define(['ApiClient', 'model/CoreProduct', 'model/CreditInterest', 'model/Eligibility', 'model/Overdraft'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CoreProduct'), require('./CreditInterest'), require('./Eligibility'), require('./Overdraft'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PersonalCurrentAccountPCAMarketingState = factory(root.YapilyApi.ApiClient, root.YapilyApi.CoreProduct, root.YapilyApi.CreditInterest, root.YapilyApi.Eligibility, root.YapilyApi.Overdraft);
  }
}(this, function(ApiClient, CoreProduct, CreditInterest, Eligibility, Overdraft) {
  'use strict';



  /**
   * The PersonalCurrentAccountPCAMarketingState model module.
   * @module model/PersonalCurrentAccountPCAMarketingState
   * @version 0.0.337
   */

  /**
   * Constructs a new <code>PersonalCurrentAccountPCAMarketingState</code>.
   * @alias module:model/PersonalCurrentAccountPCAMarketingState
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PersonalCurrentAccountPCAMarketingState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalCurrentAccountPCAMarketingState} obj Optional instance to populate.
   * @return {module:model/PersonalCurrentAccountPCAMarketingState} The populated <code>PersonalCurrentAccountPCAMarketingState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CoreProduct')) {
        obj['CoreProduct'] = CoreProduct.constructFromObject(data['CoreProduct']);
      }
      if (data.hasOwnProperty('CreditInterest')) {
        obj['CreditInterest'] = CreditInterest.constructFromObject(data['CreditInterest']);
      }
      if (data.hasOwnProperty('Eligibility')) {
        obj['Eligibility'] = Eligibility.constructFromObject(data['Eligibility']);
      }
      if (data.hasOwnProperty('FirstMarketedDate')) {
        obj['FirstMarketedDate'] = ApiClient.convertToType(data['FirstMarketedDate'], 'Date');
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('LastMarketedDate')) {
        obj['LastMarketedDate'] = ApiClient.convertToType(data['LastMarketedDate'], 'Date');
      }
      if (data.hasOwnProperty('MarketingState')) {
        obj['MarketingState'] = ApiClient.convertToType(data['MarketingState'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('Overdraft')) {
        obj['Overdraft'] = Overdraft.constructFromObject(data['Overdraft']);
      }
      if (data.hasOwnProperty('PredecessorID')) {
        obj['PredecessorID'] = ApiClient.convertToType(data['PredecessorID'], 'String');
      }
      if (data.hasOwnProperty('StateTenureLength')) {
        obj['StateTenureLength'] = ApiClient.convertToType(data['StateTenureLength'], 'Number');
      }
      if (data.hasOwnProperty('StateTenurePeriod')) {
        obj['StateTenurePeriod'] = ApiClient.convertToType(data['StateTenurePeriod'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CoreProduct} CoreProduct
   */
  exports.prototype['CoreProduct'] = undefined;
  /**
   * @member {module:model/CreditInterest} CreditInterest
   */
  exports.prototype['CreditInterest'] = undefined;
  /**
   * @member {module:model/Eligibility} Eligibility
   */
  exports.prototype['Eligibility'] = undefined;
  /**
   * @member {Date} FirstMarketedDate
   */
  exports.prototype['FirstMarketedDate'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {Date} LastMarketedDate
   */
  exports.prototype['LastMarketedDate'] = undefined;
  /**
   * @member {String} MarketingState
   */
  exports.prototype['MarketingState'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/Overdraft} Overdraft
   */
  exports.prototype['Overdraft'] = undefined;
  /**
   * @member {String} PredecessorID
   */
  exports.prototype['PredecessorID'] = undefined;
  /**
   * @member {Number} StateTenureLength
   */
  exports.prototype['StateTenureLength'] = undefined;
  /**
   * @member {String} StateTenurePeriod
   */
  exports.prototype['StateTenurePeriod'] = undefined;



  return exports;
}));


