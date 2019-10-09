/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.152
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.OverdraftOverdraftFeeChargeCap();
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

  describe('OverdraftOverdraftFeeChargeCap', function() {
    it('should create an instance of OverdraftOverdraftFeeChargeCap', function() {
      // uncomment below and update the code to test OverdraftOverdraftFeeChargeCap
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be.a(YapilyApi.OverdraftOverdraftFeeChargeCap);
    });

    it('should have the property cappingPeriod (base name: "CappingPeriod")', function() {
      // uncomment below and update the code to test the property cappingPeriod
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property feeCapAmount (base name: "FeeCapAmount")', function() {
      // uncomment below and update the code to test the property feeCapAmount
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property feeCapOccurrence (base name: "FeeCapOccurrence")', function() {
      // uncomment below and update the code to test the property feeCapOccurrence
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property feeType (base name: "FeeType")', function() {
      // uncomment below and update the code to test the property feeType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property minMaxType (base name: "MinMaxType")', function() {
      // uncomment below and update the code to test the property minMaxType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property otherFeeType (base name: "OtherFeeType")', function() {
      // uncomment below and update the code to test the property otherFeeType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

    it('should have the property overdraftControlIndicator (base name: "OverdraftControlIndicator")', function() {
      // uncomment below and update the code to test the property overdraftControlIndicator
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeCap();
      //expect(instance).to.be();
    });

  });

}));
