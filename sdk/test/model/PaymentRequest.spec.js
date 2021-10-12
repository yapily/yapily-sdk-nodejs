/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.124.0
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
    instance = new YapilyApi.PaymentRequest();
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

  describe('PaymentRequest', function() {
    it('should create an instance of PaymentRequest', function() {
      // uncomment below and update the code to test PaymentRequest
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be.a(YapilyApi.PaymentRequest);
    });

    it('should have the property paymentIdempotencyId (base name: "paymentIdempotencyId")', function() {
      // uncomment below and update the code to test the property paymentIdempotencyId
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property contextType (base name: "contextType")', function() {
      // uncomment below and update the code to test the property contextType
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentDateTime (base name: "paymentDateTime")', function() {
      // uncomment below and update the code to test the property paymentDateTime
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property payee (base name: "payee")', function() {
      // uncomment below and update the code to test the property payee
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property periodicPayment (base name: "periodicPayment")', function() {
      // uncomment below and update the code to test the property periodicPayment
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property internationalPayment (base name: "internationalPayment")', function() {
      // uncomment below and update the code to test the property internationalPayment
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property readRefundAccount (base name: "readRefundAccount")', function() {
      // uncomment below and update the code to test the property readRefundAccount
      //var instance = new YapilyApi.PaymentRequest();
      //expect(instance).to.be();
    });

  });

}));
