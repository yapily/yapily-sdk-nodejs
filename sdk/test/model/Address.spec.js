/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.302
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
    instance = new YapilyApi.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be.a(YapilyApi.Address);
    });

    it('should have the property addressLines (base name: "addressLines")', function() {
      // uncomment below and update the code to test the property addressLines
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "streetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "buildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property postCode (base name: "postCode")', function() {
      // uncomment below and update the code to test the property postCode
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property townName (base name: "townName")', function() {
      // uncomment below and update the code to test the property townName
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property county (base name: "county")', function() {
      // uncomment below and update the code to test the property county
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property addressType (base name: "addressType")', function() {
      // uncomment below and update the code to test the property addressType
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

    it('should have the property subDepartment (base name: "subDepartment")', function() {
      // uncomment below and update the code to test the property subDepartment
      //var instance = new YapilyApi.Address();
      //expect(instance).to.be();
    });

  });

}));
