/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.273
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
    instance = new YapilyApi.PaymentResponse();
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

  describe('PaymentResponse', function() {
    it('should create an instance of PaymentResponse', function() {
      // uncomment below and update the code to test PaymentResponse
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be.a(YapilyApi.PaymentResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionConsentId (base name: "institutionConsentId")', function() {
      // uncomment below and update the code to test the property institutionConsentId
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentIdempotencyId (base name: "paymentIdempotencyId")', function() {
      // uncomment below and update the code to test the property paymentIdempotencyId
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentLifecycleId (base name: "paymentLifecycleId")', function() {
      // uncomment below and update the code to test the property paymentLifecycleId
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusDetails (base name: "statusDetails")', function() {
      // uncomment below and update the code to test the property statusDetails
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property payeeDetails (base name: "payeeDetails")', function() {
      // uncomment below and update the code to test the property payeeDetails
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property amountDetails (base name: "amountDetails")', function() {
      // uncomment below and update the code to test the property amountDetails
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstPaymentAmount (base name: "firstPaymentAmount")', function() {
      // uncomment below and update the code to test the property firstPaymentAmount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstPaymentDateTime (base name: "firstPaymentDateTime")', function() {
      // uncomment below and update the code to test the property firstPaymentDateTime
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentAmount (base name: "nextPaymentAmount")', function() {
      // uncomment below and update the code to test the property nextPaymentAmount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentDateTime (base name: "nextPaymentDateTime")', function() {
      // uncomment below and update the code to test the property nextPaymentDateTime
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentAmount (base name: "finalPaymentAmount")', function() {
      // uncomment below and update the code to test the property finalPaymentAmount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentDateTime (base name: "finalPaymentDateTime")', function() {
      // uncomment below and update the code to test the property finalPaymentDateTime
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPayments (base name: "numberOfPayments")', function() {
      // uncomment below and update the code to test the property numberOfPayments
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousPaymentAmount (base name: "previousPaymentAmount")', function() {
      // uncomment below and update the code to test the property previousPaymentAmount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousPaymentDateTime (base name: "previousPaymentDateTime")', function() {
      // uncomment below and update the code to test the property previousPaymentDateTime
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeDetails (base name: "chargeDetails")', function() {
      // uncomment below and update the code to test the property chargeDetails
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property scheduledPaymentType (base name: "scheduledPaymentType")', function() {
      // uncomment below and update the code to test the property scheduledPaymentType
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property scheduledPaymentDateTime (base name: "scheduledPaymentDateTime")', function() {
      // uncomment below and update the code to test the property scheduledPaymentDateTime
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOfTransfer (base name: "currencyOfTransfer")', function() {
      // uncomment below and update the code to test the property currencyOfTransfer
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property purpose (base name: "purpose")', function() {
      // uncomment below and update the code to test the property purpose
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property exchangeRate (base name: "exchangeRate")', function() {
      // uncomment below and update the code to test the property exchangeRate
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property refundAccount (base name: "refundAccount")', function() {
      // uncomment below and update the code to test the property refundAccount
      //var instance = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

  });

}));
