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
    define(['ApiClient', 'model/AccountRequest', 'model/RedirectRequest', 'model/ScaMethod', 'model/UserCredentials'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountRequest'), require('./RedirectRequest'), require('./ScaMethod'), require('./UserCredentials'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountEmbeddedAuthorisationRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountRequest, root.YapilyApi.RedirectRequest, root.YapilyApi.ScaMethod, root.YapilyApi.UserCredentials);
  }
}(this, function(ApiClient, AccountRequest, RedirectRequest, ScaMethod, UserCredentials) {
  'use strict';



  /**
   * The AccountEmbeddedAuthorisationRequest model module.
   * @module model/AccountEmbeddedAuthorisationRequest
   * @version 1.259.0
   */

  /**
   * Constructs a new <code>AccountEmbeddedAuthorisationRequest</code>.
   * @alias module:model/AccountEmbeddedAuthorisationRequest
   * @class
   * @param institutionId {String} 
   * @param callback {String} 
   * @param oneTimeToken {Boolean} 
   */
  var exports = function(institutionId, callback, oneTimeToken) {
    var _this = this;

    _this['institutionId'] = institutionId;
    _this['callback'] = callback;
    _this['oneTimeToken'] = oneTimeToken;
  };

  /**
   * Constructs a <code>AccountEmbeddedAuthorisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountEmbeddedAuthorisationRequest} obj Optional instance to populate.
   * @return {module:model/AccountEmbeddedAuthorisationRequest} The populated <code>AccountEmbeddedAuthorisationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userUuid')) {
        obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
      }
      if (data.hasOwnProperty('applicationUserId')) {
        obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
      }
      if (data.hasOwnProperty('forwardParameters')) {
        obj['forwardParameters'] = ApiClient.convertToType(data['forwardParameters'], ['String']);
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
      if (data.hasOwnProperty('callback')) {
        obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
      }
      if (data.hasOwnProperty('redirect')) {
        obj['redirect'] = RedirectRequest.constructFromObject(data['redirect']);
      }
      if (data.hasOwnProperty('accountRequest')) {
        obj['accountRequest'] = AccountRequest.constructFromObject(data['accountRequest']);
      }
      if (data.hasOwnProperty('oneTimeToken')) {
        obj['oneTimeToken'] = ApiClient.convertToType(data['oneTimeToken'], 'Boolean');
      }
      if (data.hasOwnProperty('userCredentials')) {
        obj['userCredentials'] = UserCredentials.constructFromObject(data['userCredentials']);
      }
      if (data.hasOwnProperty('selectedScaMethod')) {
        obj['selectedScaMethod'] = ScaMethod.constructFromObject(data['selectedScaMethod']);
      }
      if (data.hasOwnProperty('scaCode')) {
        obj['scaCode'] = ApiClient.convertToType(data['scaCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Uuid of the application user who will authorise access to their data. Either the userUuid or applicationUserId must be provided.
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * Descriptive identifier for the application user.Either the userUuid or applicationUserId must be provided.
   * @member {String} applicationUserId
   */
  exports.prototype['applicationUserId'] = undefined;
  /**
   * @member {Array.<String>} forwardParameters
   */
  exports.prototype['forwardParameters'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {String} callback
   */
  exports.prototype['callback'] = undefined;
  /**
   * @member {module:model/RedirectRequest} redirect
   */
  exports.prototype['redirect'] = undefined;
  /**
   * @member {module:model/AccountRequest} accountRequest
   */
  exports.prototype['accountRequest'] = undefined;
  /**
   * @member {Boolean} oneTimeToken
   */
  exports.prototype['oneTimeToken'] = undefined;
  /**
   * @member {module:model/UserCredentials} userCredentials
   */
  exports.prototype['userCredentials'] = undefined;
  /**
   * @member {module:model/ScaMethod} selectedScaMethod
   */
  exports.prototype['selectedScaMethod'] = undefined;
  /**
   * @member {String} scaCode
   */
  exports.prototype['scaCode'] = undefined;



  return exports;
}));


