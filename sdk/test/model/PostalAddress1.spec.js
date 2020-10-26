/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.264
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
    instance = new YapilyApi.PostalAddress1();
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

  describe('PostalAddress1', function() {
    it('should create an instance of PostalAddress1', function() {
      // uncomment below and update the code to test PostalAddress1
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be.a(YapilyApi.PostalAddress1);
    });

    it('should have the property addressLine (base name: "AddressLine")', function() {
      // uncomment below and update the code to test the property addressLine
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "BuildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property countrySubDivision (base name: "CountrySubDivision")', function() {
      // uncomment below and update the code to test the property countrySubDivision
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property geoLocation (base name: "GeoLocation")', function() {
      // uncomment below and update the code to test the property geoLocation
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property postCode (base name: "PostCode")', function() {
      // uncomment below and update the code to test the property postCode
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "StreetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

    it('should have the property townName (base name: "TownName")', function() {
      // uncomment below and update the code to test the property townName
      //var instance = new YapilyApi.PostalAddress1();
      //expect(instance).to.be();
    });

  });

}));
