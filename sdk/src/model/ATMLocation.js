/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.49
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
    define(['ApiClient', 'model/ATMLocationOtherLocationCategory', 'model/ATMMapServiceLinks', 'model/ATMPostalAddress', 'model/ATMSite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMLocationOtherLocationCategory'), require('./ATMMapServiceLinks'), require('./ATMPostalAddress'), require('./ATMSite'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMLocation = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMLocationOtherLocationCategory, root.YapilyApi.ATMMapServiceLinks, root.YapilyApi.ATMPostalAddress, root.YapilyApi.ATMSite);
  }
}(this, function(ApiClient, ATMLocationOtherLocationCategory, ATMMapServiceLinks, ATMPostalAddress, ATMSite) {
  'use strict';




  /**
   * The ATMLocation model module.
   * @module model/ATMLocation
   * @version 0.0.49
   */

  /**
   * Constructs a new <code>ATMLocation</code>.
   * Location of the ATM.
   * @alias module:model/ATMLocation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ATMLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMLocation} obj Optional instance to populate.
   * @return {module:model/ATMLocation} The populated <code>ATMLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LocationCategory')) {
        obj['LocationCategory'] = ApiClient.convertToType(data['LocationCategory'], ['String']);
      }
      if (data.hasOwnProperty('OtherLocationCategory')) {
        obj['OtherLocationCategory'] = ApiClient.convertToType(data['OtherLocationCategory'], [ATMLocationOtherLocationCategory]);
      }
      if (data.hasOwnProperty('PostalAddress')) {
        obj['PostalAddress'] = ATMPostalAddress.constructFromObject(data['PostalAddress']);
      }
      if (data.hasOwnProperty('Site')) {
        obj['Site'] = ATMSite.constructFromObject(data['Site']);
      }
      if (data.hasOwnProperty('mapServiceLinks')) {
        obj['mapServiceLinks'] = ATMMapServiceLinks.constructFromObject(data['mapServiceLinks']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ATMLocation.LocationCategoryEnum>} LocationCategory
   */
  exports.prototype['LocationCategory'] = undefined;
  /**
   * @member {Array.<module:model/ATMLocationOtherLocationCategory>} OtherLocationCategory
   */
  exports.prototype['OtherLocationCategory'] = undefined;
  /**
   * @member {module:model/ATMPostalAddress} PostalAddress
   */
  exports.prototype['PostalAddress'] = undefined;
  /**
   * @member {module:model/ATMSite} Site
   */
  exports.prototype['Site'] = undefined;
  /**
   * @member {module:model/ATMMapServiceLinks} mapServiceLinks
   */
  exports.prototype['mapServiceLinks'] = undefined;


  /**
   * Allowed values for the <code>locationCategory</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationCategoryEnum = {
    /**
     * value: "BranchExternal"
     * @const
     */
    "BranchExternal": "BranchExternal",
    /**
     * value: "BranchInternal"
     * @const
     */
    "BranchInternal": "BranchInternal",
    /**
     * value: "BranchLobby"
     * @const
     */
    "BranchLobby": "BranchLobby",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "RetailerOutlet"
     * @const
     */
    "RetailerOutlet": "RetailerOutlet",
    /**
     * value: "RemoteUnit"
     * @const
     */
    "RemoteUnit": "RemoteUnit"  };


  return exports;
}));


