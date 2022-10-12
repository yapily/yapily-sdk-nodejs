/**
 * Yapily API
 * The Yapily API enables connections between your application and users' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: support@yapily.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new YapilyApi.NonSweepingAuthorisationRequest();
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

  describe('NonSweepingAuthorisationRequest', function() {
    it('should create an instance of NonSweepingAuthorisationRequest', function() {
      // uncomment below and update the code to test NonSweepingAuthorisationRequest
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be.a(YapilyApi.NonSweepingAuthorisationRequest);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property forwardParameters (base name: "forwardParameters")', function() {
      // uncomment below and update the code to test the property forwardParameters
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property contextType (base name: "contextType")', function() {
      // uncomment below and update the code to test the property contextType
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property callback (base name: "callback")', function() {
      // uncomment below and update the code to test the property callback
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property redirect (base name: "redirect")', function() {
      // uncomment below and update the code to test the property redirect
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeToken (base name: "oneTimeToken")', function() {
      // uncomment below and update the code to test the property oneTimeToken
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property controlParameters (base name: "controlParameters")', function() {
      // uncomment below and update the code to test the property controlParameters
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property initiationDetails (base name: "initiationDetails")', function() {
      // uncomment below and update the code to test the property initiationDetails
      //var instance = new YapilyApi.NonSweepingAuthorisationRequest();
      //expect(instance).to.be();
    });

  });

}));
