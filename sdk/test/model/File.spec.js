/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.215
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
    instance = new YapilyApi.File();
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

  describe('File', function() {
    it('should create an instance of File', function() {
      // uncomment below and update the code to test File
      //var instance = new YapilyApi.File();
      //expect(instance).to.be.a(YapilyApi.File);
    });

    it('should have the property absolute (base name: "absolute")', function() {
      // uncomment below and update the code to test the property absolute
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property absoluteFile (base name: "absoluteFile")', function() {
      // uncomment below and update the code to test the property absoluteFile
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property absolutePath (base name: "absolutePath")', function() {
      // uncomment below and update the code to test the property absolutePath
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property canonicalFile (base name: "canonicalFile")', function() {
      // uncomment below and update the code to test the property canonicalFile
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property canonicalPath (base name: "canonicalPath")', function() {
      // uncomment below and update the code to test the property canonicalPath
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property directory (base name: "directory")', function() {
      // uncomment below and update the code to test the property directory
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property freeSpace (base name: "freeSpace")', function() {
      // uncomment below and update the code to test the property freeSpace
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property parentFile (base name: "parentFile")', function() {
      // uncomment below and update the code to test the property parentFile
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property totalSpace (base name: "totalSpace")', function() {
      // uncomment below and update the code to test the property totalSpace
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

    it('should have the property usableSpace (base name: "usableSpace")', function() {
      // uncomment below and update the code to test the property usableSpace
      //var instance = new YapilyApi.File();
      //expect(instance).to.be();
    });

  });

}));
