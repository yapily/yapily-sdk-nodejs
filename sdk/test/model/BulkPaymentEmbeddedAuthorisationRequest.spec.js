/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.123.0
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
    instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
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

  describe('BulkPaymentEmbeddedAuthorisationRequest', function() {
    it('should create an instance of BulkPaymentEmbeddedAuthorisationRequest', function() {
      // uncomment below and update the code to test BulkPaymentEmbeddedAuthorisationRequest
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be.a(YapilyApi.BulkPaymentEmbeddedAuthorisationRequest);
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property forwardParameters (base name: "forwardParameters")', function() {
      // uncomment below and update the code to test the property forwardParameters
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property callback (base name: "callback")', function() {
      // uncomment below and update the code to test the property callback
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeToken (base name: "oneTimeToken")', function() {
      // uncomment below and update the code to test the property oneTimeToken
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property redirect (base name: "redirect")', function() {
      // uncomment below and update the code to test the property redirect
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentRequest (base name: "paymentRequest")', function() {
      // uncomment below and update the code to test the property paymentRequest
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property userCredentials (base name: "userCredentials")', function() {
      // uncomment below and update the code to test the property userCredentials
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property selectedScaMethod (base name: "selectedScaMethod")', function() {
      // uncomment below and update the code to test the property selectedScaMethod
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property scaCode (base name: "scaCode")', function() {
      // uncomment below and update the code to test the property scaCode
      //var instance = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest();
      //expect(instance).to.be();
    });

  });

}));
