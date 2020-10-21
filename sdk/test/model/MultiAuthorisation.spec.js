/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.261
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
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.MultiAuthorisation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MultiAuthorisation', function() {
    it('should create an instance of MultiAuthorisation', function() {
      // uncomment below and update the code to test MultiAuthorisation
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be.a(YapilyApi.MultiAuthorisation);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be();
    });

    it('should have the property numberOfAuthorisationRequired (base name: "numberOfAuthorisationRequired")', function() {
      // uncomment below and update the code to test the property numberOfAuthorisationRequired
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be();
    });

    it('should have the property numberOfAuthorisationReceived (base name: "numberOfAuthorisationReceived")', function() {
      // uncomment below and update the code to test the property numberOfAuthorisationReceived
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedDateTime (base name: "lastUpdatedDateTime")', function() {
      // uncomment below and update the code to test the property lastUpdatedDateTime
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be();
    });

    it('should have the property expirationDateTime (base name: "expirationDateTime")', function() {
      // uncomment below and update the code to test the property expirationDateTime
      //var instance = new YapilyApi.MultiAuthorisation();
      //expect(instance).to.be();
    });

  });

}));
