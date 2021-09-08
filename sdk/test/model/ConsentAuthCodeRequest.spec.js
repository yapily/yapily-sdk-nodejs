/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.81.0
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
    instance = new YapilyApi.ConsentAuthCodeRequest();
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

  describe('ConsentAuthCodeRequest', function() {
    it('should create an instance of ConsentAuthCodeRequest', function() {
      // uncomment below and update the code to test ConsentAuthCodeRequest
      //var instance = new YapilyApi.ConsentAuthCodeRequest();
      //expect(instance).to.be.a(YapilyApi.ConsentAuthCodeRequest);
    });

    it('should have the property authCode (base name: "authCode")', function() {
      // uncomment below and update the code to test the property authCode
      //var instance = new YapilyApi.ConsentAuthCodeRequest();
      //expect(instance).to.be();
    });

    it('should have the property authState (base name: "authState")', function() {
      // uncomment below and update the code to test the property authState
      //var instance = new YapilyApi.ConsentAuthCodeRequest();
      //expect(instance).to.be();
    });

  });

}));
