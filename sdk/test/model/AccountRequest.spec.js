/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.208
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
    instance = new YapilyApi.AccountRequest();
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

  describe('AccountRequest', function() {
    it('should create an instance of AccountRequest', function() {
      // uncomment below and update the code to test AccountRequest
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be.a(YapilyApi.AccountRequest);
    });

    it('should have the property transactionFrom (base name: "transactionFrom")', function() {
      // uncomment below and update the code to test the property transactionFrom
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionTo (base name: "transactionTo")', function() {
      // uncomment below and update the code to test the property transactionTo
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountIdentifiers (base name: "accountIdentifiers")', function() {
      // uncomment below and update the code to test the property accountIdentifiers
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountIdentifiersForTransaction (base name: "accountIdentifiersForTransaction")', function() {
      // uncomment below and update the code to test the property accountIdentifiersForTransaction
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountIdentifiersForBalance (base name: "accountIdentifiersForBalance")', function() {
      // uncomment below and update the code to test the property accountIdentifiersForBalance
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property featureScope (base name: "featureScope")', function() {
      // uncomment below and update the code to test the property featureScope
      //var instance = new YapilyApi.AccountRequest();
      //expect(instance).to.be();
    });

  });

}));
