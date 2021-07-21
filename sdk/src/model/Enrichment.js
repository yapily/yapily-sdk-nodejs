/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.366
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
    define(['ApiClient', 'model/Categorisation', 'model/TransactionHash'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Categorisation'), require('./TransactionHash'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Enrichment = factory(root.YapilyApi.ApiClient, root.YapilyApi.Categorisation, root.YapilyApi.TransactionHash);
  }
}(this, function(ApiClient, Categorisation, TransactionHash) {
  'use strict';



  /**
   * The Enrichment model module.
   * @module model/Enrichment
   * @version 0.0.366
   */

  /**
   * Constructs a new <code>Enrichment</code>.
   * @alias module:model/Enrichment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Enrichment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Enrichment} obj Optional instance to populate.
   * @return {module:model/Enrichment} The populated <code>Enrichment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('categorisation')) {
        obj['categorisation'] = Categorisation.constructFromObject(data['categorisation']);
      }
      if (data.hasOwnProperty('transactionHash')) {
        obj['transactionHash'] = TransactionHash.constructFromObject(data['transactionHash']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Categorisation} categorisation
   */
  exports.prototype['categorisation'] = undefined;
  /**
   * @member {module:model/TransactionHash} transactionHash
   */
  exports.prototype['transactionHash'] = undefined;



  return exports;
}));


