/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.318
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
    instance = new YapilyApi.PaymentAuthorisationRequest();
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

  describe('PaymentAuthorisationRequest', function() {
    it('should create an instance of PaymentAuthorisationRequest', function() {
      // uncomment below and update the code to test PaymentAuthorisationRequest
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be.a(YapilyApi.PaymentAuthorisationRequest);
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property forwardParameters (base name: "forwardParameters")', function() {
      // uncomment below and update the code to test the property forwardParameters
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property callback (base name: "callback")', function() {
      // uncomment below and update the code to test the property callback
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeToken (base name: "oneTimeToken")', function() {
      // uncomment below and update the code to test the property oneTimeToken
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalMaxAmount (base name: "totalMaxAmount")', function() {
      // uncomment below and update the code to test the property totalMaxAmount
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalMaxAmountFrequency (base name: "totalMaxAmountFrequency")', function() {
      // uncomment below and update the code to test the property totalMaxAmountFrequency
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxAmountPerRequest (base name: "maxAmountPerRequest")', function() {
      // uncomment below and update the code to test the property maxAmountPerRequest
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "startsAt")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property allowOverdraft (base name: "allowOverdraft")', function() {
      // uncomment below and update the code to test the property allowOverdraft
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentRequest (base name: "paymentRequest")', function() {
      // uncomment below and update the code to test the property paymentRequest
      //var instance = new YapilyApi.PaymentAuthorisationRequest();
      //expect(instance).to.be();
    });

  });

}));
