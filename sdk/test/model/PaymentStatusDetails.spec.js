/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.398
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
    instance = new YapilyApi.PaymentStatusDetails();
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

  describe('PaymentStatusDetails', function() {
    it('should create an instance of PaymentStatusDetails', function() {
      // uncomment below and update the code to test PaymentStatusDetails
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be.a(YapilyApi.PaymentStatusDetails);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusReason (base name: "statusReason")', function() {
      // uncomment below and update the code to test the property statusReason
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusReasonDescription (base name: "statusReasonDescription")', function() {
      // uncomment below and update the code to test the property statusReasonDescription
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusUpdateDate (base name: "statusUpdateDate")', function() {
      // uncomment below and update the code to test the property statusUpdateDate
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property multiAuthorisationStatus (base name: "multiAuthorisationStatus")', function() {
      // uncomment below and update the code to test the property multiAuthorisationStatus
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property isoStatus (base name: "isoStatus")', function() {
      // uncomment below and update the code to test the property isoStatus
      //var instance = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

  });

}));
