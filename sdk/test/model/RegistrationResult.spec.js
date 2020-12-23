/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.295
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
    instance = new YapilyApi.RegistrationResult();
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

  describe('RegistrationResult', function() {
    it('should create an instance of RegistrationResult', function() {
      // uncomment below and update the code to test RegistrationResult
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be.a(YapilyApi.RegistrationResult);
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property tppId (base name: "tppId")', function() {
      // uncomment below and update the code to test the property tppId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property softwareId (base name: "softwareId")', function() {
      // uncomment below and update the code to test the property softwareId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property signingKeyId (base name: "signingKeyId")', function() {
      // uncomment below and update the code to test the property signingKeyId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property signingCertificateId (base name: "signingCertificateId")', function() {
      // uncomment below and update the code to test the property signingCertificateId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property transportKeyId (base name: "transportKeyId")', function() {
      // uncomment below and update the code to test the property transportKeyId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property transportCertificateId (base name: "transportCertificateId")', function() {
      // uncomment below and update the code to test the property transportCertificateId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property clientUri (base name: "clientUri")', function() {
      // uncomment below and update the code to test the property clientUri
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property termsOfServiceUri (base name: "termsOfServiceUri")', function() {
      // uncomment below and update the code to test the property termsOfServiceUri
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property ssaJwt (base name: "ssaJwt")', function() {
      // uncomment below and update the code to test the property ssaJwt
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "clientSecret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property signingKeyStore (base name: "signingKeyStore")', function() {
      // uncomment below and update the code to test the property signingKeyStore
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property transportKeyStore (base name: "transportKeyStore")', function() {
      // uncomment below and update the code to test the property transportKeyStore
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

    it('should have the property registrationResponse (base name: "registrationResponse")', function() {
      // uncomment below and update the code to test the property registrationResponse
      //var instance = new YapilyApi.RegistrationResult();
      //expect(instance).to.be();
    });

  });

}));
