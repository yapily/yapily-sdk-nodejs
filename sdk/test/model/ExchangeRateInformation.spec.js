/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.396
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
    instance = new YapilyApi.ExchangeRateInformation();
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

  describe('ExchangeRateInformation', function() {
    it('should create an instance of ExchangeRateInformation', function() {
      // uncomment below and update the code to test ExchangeRateInformation
      //var instance = new YapilyApi.ExchangeRateInformation();
      //expect(instance).to.be.a(YapilyApi.ExchangeRateInformation);
    });

    it('should have the property foreignExchangeContractReference (base name: "foreignExchangeContractReference")', function() {
      // uncomment below and update the code to test the property foreignExchangeContractReference
      //var instance = new YapilyApi.ExchangeRateInformation();
      //expect(instance).to.be();
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instance = new YapilyApi.ExchangeRateInformation();
      //expect(instance).to.be();
    });

    it('should have the property rateType (base name: "rateType")', function() {
      // uncomment below and update the code to test the property rateType
      //var instance = new YapilyApi.ExchangeRateInformation();
      //expect(instance).to.be();
    });

    it('should have the property unitCurrency (base name: "unitCurrency")', function() {
      // uncomment below and update the code to test the property unitCurrency
      //var instance = new YapilyApi.ExchangeRateInformation();
      //expect(instance).to.be();
    });

  });

}));
