/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.311
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
    instance = new YapilyApi.URL();
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

  describe('URL', function() {
    it('should create an instance of URL', function() {
      // uncomment below and update the code to test URL
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be.a(YapilyApi.URL);
    });

    it('should have the property authority (base name: "authority")', function() {
      // uncomment below and update the code to test the property authority
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property defaultPort (base name: "defaultPort")', function() {
      // uncomment below and update the code to test the property defaultPort
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property ref (base name: "ref")', function() {
      // uncomment below and update the code to test the property ref
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

    it('should have the property userInfo (base name: "userInfo")', function() {
      // uncomment below and update the code to test the property userInfo
      //var instance = new YapilyApi.URL();
      //expect(instance).to.be();
    });

  });

}));
