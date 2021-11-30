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
    define(['ApiClient', 'model/AgeEligibility', 'model/CreditCheck', 'model/EligibilityOtherEligibility', 'model/IDVerificationCheck', 'model/ResidencyEligibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgeEligibility'), require('./CreditCheck'), require('./EligibilityOtherEligibility'), require('./IDVerificationCheck'), require('./ResidencyEligibility'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Eligibility = factory(root.YapilyApi.ApiClient, root.YapilyApi.AgeEligibility, root.YapilyApi.CreditCheck, root.YapilyApi.EligibilityOtherEligibility, root.YapilyApi.IDVerificationCheck, root.YapilyApi.ResidencyEligibility);
  }
}(this, function(ApiClient, AgeEligibility, CreditCheck, EligibilityOtherEligibility, IDVerificationCheck, ResidencyEligibility) {
  'use strict';



  /**
   * The Eligibility model module.
   * @module model/Eligibility
   * @version 1.205.0
   */

  /**
   * Constructs a new <code>Eligibility</code>.
   * Eligibility details for this product i.e. the criteria that an accountholder has to meet in order to be eligible for the PCA product.
   * @alias module:model/Eligibility
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Eligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Eligibility} obj Optional instance to populate.
   * @return {module:model/Eligibility} The populated <code>Eligibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AgeEligibility')) {
        obj['AgeEligibility'] = AgeEligibility.constructFromObject(data['AgeEligibility']);
      }
      if (data.hasOwnProperty('CreditCheck')) {
        obj['CreditCheck'] = CreditCheck.constructFromObject(data['CreditCheck']);
      }
      if (data.hasOwnProperty('IDVerificationCheck')) {
        obj['IDVerificationCheck'] = IDVerificationCheck.constructFromObject(data['IDVerificationCheck']);
      }
      if (data.hasOwnProperty('OtherEligibility')) {
        obj['OtherEligibility'] = ApiClient.convertToType(data['OtherEligibility'], [EligibilityOtherEligibility]);
      }
      if (data.hasOwnProperty('ResidencyEligibility')) {
        obj['ResidencyEligibility'] = ResidencyEligibility.constructFromObject(data['ResidencyEligibility']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AgeEligibility} AgeEligibility
   */
  exports.prototype['AgeEligibility'] = undefined;
  /**
   * @member {module:model/CreditCheck} CreditCheck
   */
  exports.prototype['CreditCheck'] = undefined;
  /**
   * @member {module:model/IDVerificationCheck} IDVerificationCheck
   */
  exports.prototype['IDVerificationCheck'] = undefined;
  /**
   * @member {Array.<module:model/EligibilityOtherEligibility>} OtherEligibility
   */
  exports.prototype['OtherEligibility'] = undefined;
  /**
   * @member {module:model/ResidencyEligibility} ResidencyEligibility
   */
  exports.prototype['ResidencyEligibility'] = undefined;



  return exports;
}));


