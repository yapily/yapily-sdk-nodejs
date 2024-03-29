/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 1.157.0
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
    instance = new YapilyApi.AuthorisationRequestResponse();
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

  describe('AuthorisationRequestResponse', function() {
    it('should create an instance of AuthorisationRequestResponse', function() {
      // uncomment below and update the code to test AuthorisationRequestResponse
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be.a(YapilyApi.AuthorisationRequestResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionFrom (base name: "transactionFrom")', function() {
      // uncomment below and update the code to test the property transactionFrom
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionTo (base name: "transactionTo")', function() {
      // uncomment below and update the code to test the property transactionTo
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeToExpireInMillis (base name: "timeToExpireInMillis")', function() {
      // uncomment below and update the code to test the property timeToExpireInMillis
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeToExpire (base name: "timeToExpire")', function() {
      // uncomment below and update the code to test the property timeToExpire
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property featureScope (base name: "featureScope")', function() {
      // uncomment below and update the code to test the property featureScope
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorisationUrl (base name: "authorisationUrl")', function() {
      // uncomment below and update the code to test the property authorisationUrl
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property consentToken (base name: "consentToken")', function() {
      // uncomment below and update the code to test the property consentToken
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property qrCodeUrl (base name: "qrCodeUrl")', function() {
      // uncomment below and update the code to test the property qrCodeUrl
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorizedAt (base name: "authorizedAt")', function() {
      // uncomment below and update the code to test the property authorizedAt
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionConsentId (base name: "institutionConsentId")', function() {
      // uncomment below and update the code to test the property institutionConsentId
      //var instance = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

  });

}));
