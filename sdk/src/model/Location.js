/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.174
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ATMMapServiceLinks', 'model/LocationOtherLocationCategory', 'model/PostalAddress1', 'model/Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMMapServiceLinks'), require('./LocationOtherLocationCategory'), require('./PostalAddress1'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Location = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMMapServiceLinks, root.YapilyApi.LocationOtherLocationCategory, root.YapilyApi.PostalAddress1, root.YapilyApi.Site);
  }
}(this, function(ApiClient, ATMMapServiceLinks, LocationOtherLocationCategory, PostalAddress1, Site) {
  'use strict';



  /**
   * The Location model module.
   * @module model/Location
   * @version 0.0.174
   */

  /**
   * Constructs a new <code>Location</code>.
   * Location of the ATM.
   * @alias module:model/Location
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('LocationCategory')) {
        obj['LocationCategory'] = ApiClient.convertToType(data['LocationCategory'], ['String']);
      }
      if (data.hasOwnProperty('OtherLocationCategory')) {
        obj['OtherLocationCategory'] = ApiClient.convertToType(data['OtherLocationCategory'], [LocationOtherLocationCategory]);
      }
      if (data.hasOwnProperty('PostalAddress')) {
        obj['PostalAddress'] = PostalAddress1.constructFromObject(data['PostalAddress']);
      }
      if (data.hasOwnProperty('Site')) {
        obj['Site'] = Site.constructFromObject(data['Site']);
      }
      if (data.hasOwnProperty('mapServiceLinks')) {
        obj['mapServiceLinks'] = ATMMapServiceLinks.constructFromObject(data['mapServiceLinks']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Location.LocationCategoryEnum>} LocationCategory
   */
  exports.prototype['LocationCategory'] = undefined;
  /**
   * @member {Array.<module:model/LocationOtherLocationCategory>} OtherLocationCategory
   */
  exports.prototype['OtherLocationCategory'] = undefined;
  /**
   * @member {module:model/PostalAddress1} PostalAddress
   */
  exports.prototype['PostalAddress'] = undefined;
  /**
   * @member {module:model/Site} Site
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


