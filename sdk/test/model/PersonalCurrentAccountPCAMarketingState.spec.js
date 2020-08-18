/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.224
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
    instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
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

  describe('PersonalCurrentAccountPCAMarketingState', function() {
    it('should create an instance of PersonalCurrentAccountPCAMarketingState', function() {
      // uncomment below and update the code to test PersonalCurrentAccountPCAMarketingState
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be.a(YapilyApi.PersonalCurrentAccountPCAMarketingState);
    });

    it('should have the property coreProduct (base name: "CoreProduct")', function() {
      // uncomment below and update the code to test the property coreProduct
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property creditInterest (base name: "CreditInterest")', function() {
      // uncomment below and update the code to test the property creditInterest
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property eligibility (base name: "Eligibility")', function() {
      // uncomment below and update the code to test the property eligibility
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property firstMarketedDate (base name: "FirstMarketedDate")', function() {
      // uncomment below and update the code to test the property firstMarketedDate
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property identification (base name: "Identification")', function() {
      // uncomment below and update the code to test the property identification
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property lastMarketedDate (base name: "LastMarketedDate")', function() {
      // uncomment below and update the code to test the property lastMarketedDate
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property marketingState (base name: "MarketingState")', function() {
      // uncomment below and update the code to test the property marketingState
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property overdraft (base name: "Overdraft")', function() {
      // uncomment below and update the code to test the property overdraft
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property predecessorID (base name: "PredecessorID")', function() {
      // uncomment below and update the code to test the property predecessorID
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property stateTenureLength (base name: "StateTenureLength")', function() {
      // uncomment below and update the code to test the property stateTenureLength
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

    it('should have the property stateTenurePeriod (base name: "StateTenurePeriod")', function() {
      // uncomment below and update the code to test the property stateTenurePeriod
      //var instance = new YapilyApi.PersonalCurrentAccountPCAMarketingState();
      //expect(instance).to.be();
    });

  });

}));
