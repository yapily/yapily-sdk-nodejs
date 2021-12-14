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
    define(['ApiClient', 'model/AccountIdentification', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentification'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.BeneficiaryPayee = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountIdentification, root.YapilyApi.Address);
  }
}(this, function(ApiClient, AccountIdentification, Address) {
  'use strict';



  /**
   * The BeneficiaryPayee model module.
   * @module model/BeneficiaryPayee
   * @version 1.220.0
   */

  /**
   * Constructs a new <code>BeneficiaryPayee</code>.
   * __Mandatory__. The &#x60;BeneficiaryPayee&#x60; object contains details of the beneficiary [person or business]. You must define this in your payment request along with all of the nested mandatory properties.
   * @alias module:model/BeneficiaryPayee
   * @class
   * @param accountIdentifications {Array.<module:model/AccountIdentification>} __Mandatory__. The account identifications that identify the `BeneficiaryPayee` bank account.
   */
  var exports = function(accountIdentifications) {
    var _this = this;

    _this['accountIdentifications'] = accountIdentifications;
  };

  /**
   * Constructs a <code>BeneficiaryPayee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeneficiaryPayee} obj Optional instance to populate.
   * @return {module:model/BeneficiaryPayee} The populated <code>BeneficiaryPayee</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('accountIdentifications')) {
        obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
      }
    }
    return obj;
  }

  /**
   * The account holder name of the beneficiary.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * __Mandatory__. The account identifications that identify the `BeneficiaryPayee` bank account.
   * @member {Array.<module:model/AccountIdentification>} accountIdentifications
   */
  exports.prototype['accountIdentifications'] = undefined;



  return exports;
}));


