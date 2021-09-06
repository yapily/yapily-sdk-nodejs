/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.64.0
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
    instance = new YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse();
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

  describe('ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse', function() {
    it('should create an instance of ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse', function() {
      // uncomment below and update the code to test ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse
      //var instance = new YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse();
      //expect(instance).to.be.a(YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse);
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

  });

}));
