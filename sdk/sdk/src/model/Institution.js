/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.30
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
    define(['ApiClient', 'model/Country', 'model/Media'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'), require('./Media'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Institution = factory(root.YapilyApi.ApiClient, root.YapilyApi.Country, root.YapilyApi.Media);
  }
}(this, function(ApiClient, Country, Media) {
  'use strict';




  /**
   * The Institution model module.
   * @module model/Institution
   * @version 0.0.30
   */

  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
      }
      if (data.hasOwnProperty('credentialsType')) {
        obj['credentialsType'] = ApiClient.convertToType(data['credentialsType'], 'String');
      }
      if (data.hasOwnProperty('environmentType')) {
        obj['environmentType'] = ApiClient.convertToType(data['environmentType'], 'String');
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], ['String']);
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Country>} countries
   */
  exports.prototype['countries'] = undefined;
  /**
   * @member {module:model/Institution.CredentialsTypeEnum} credentialsType
   */
  exports.prototype['credentialsType'] = undefined;
  /**
   * @member {module:model/Institution.EnvironmentTypeEnum} environmentType
   */
  exports.prototype['environmentType'] = undefined;
  /**
   * @member {Array.<module:model/Institution.FeaturesEnum>} features
   */
  exports.prototype['features'] = undefined;
  /**
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>credentialsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CredentialsTypeEnum = {
    /**
     * value: "OAUTH1"
     * @const
     */
    "OAUTH1": "OAUTH1",
    /**
     * value: "OAUTH2"
     * @const
     */
    "OAUTH2": "OAUTH2",
    /**
     * value: "OAUTH2_NOSECRET"
     * @const
     */
    "OAUTH2_NOSECRET": "OAUTH2_NOSECRET",
    /**
     * value: "OPEN_BANKING"
     * @const
     */
    "OPEN_BANKING": "OPEN_BANKING",
    /**
     * value: "OPEN_BANKING_SANDBOX"
     * @const
     */
    "OPEN_BANKING_SANDBOX": "OPEN_BANKING_SANDBOX",
    /**
     * value: "OPEN_BANKING_IBM"
     * @const
     */
    "OPEN_BANKING_IBM": "OPEN_BANKING_IBM",
    /**
     * value: "OPEN_BANKING_KEY_SECRET_SANDBOX"
     * @const
     */
    "OPEN_BANKING_KEY_SECRET_SANDBOX": "OPEN_BANKING_KEY_SECRET_SANDBOX",
    /**
     * value: "API_KEY"
     * @const
     */
    "API_KEY": "API_KEY"  };

  /**
   * Allowed values for the <code>environmentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnvironmentTypeEnum = {
    /**
     * value: "SANDBOX"
     * @const
     */
    "SANDBOX": "SANDBOX",
    /**
     * value: "MOCK"
     * @const
     */
    "MOCK": "MOCK",
    /**
     * value: "LIVE"
     * @const
     */
    "LIVE": "LIVE"  };

  /**
   * Allowed values for the <code>features</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeaturesEnum = {
    /**
     * value: "ACCOUNTS"
     * @const
     */
    "ACCOUNTS": "ACCOUNTS",
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT",
    /**
     * value: "ACCOUNT_TRANSACTIONS"
     * @const
     */
    "ACCOUNT_TRANSACTIONS": "ACCOUNT_TRANSACTIONS",
    /**
     * value: "IDENTITY"
     * @const
     */
    "IDENTITY": "IDENTITY",
    /**
     * value: "INITIATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "INITIATE_SINGLE_PAYMENT_SORTCODE": "INITIATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENT_INITIATION_DETAILS"
     * @const
     */
    "EXISTING_PAYMENT_INITIATION_DETAILS": "EXISTING_PAYMENT_INITIATION_DETAILS",
    /**
     * value: "CREATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "CREATE_SINGLE_PAYMENT_SORTCODE": "CREATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENTS_DETAILS"
     * @const
     */
    "EXISTING_PAYMENTS_DETAILS": "EXISTING_PAYMENTS_DETAILS",
    /**
     * value: "TRANSFER"
     * @const
     */
    "TRANSFER": "TRANSFER",
    /**
     * value: "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"
     * @const
     */
    "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS": "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS",
    /**
     * value: "OPEN_DATA_ATMS"
     * @const
     */
    "OPEN_DATA_ATMS": "OPEN_DATA_ATMS"  };


  return exports;
}));


