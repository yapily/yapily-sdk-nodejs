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
    instance = new YapilyApi.EnrichedPredictedBalance();
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

  describe('EnrichedPredictedBalance', function() {
    it('should create an instance of EnrichedPredictedBalance', function() {
      // uncomment below and update the code to test EnrichedPredictedBalance
      //var instance = new YapilyApi.EnrichedPredictedBalance();
      //expect(instance).to.be.a(YapilyApi.EnrichedPredictedBalance);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new YapilyApi.EnrichedPredictedBalance();
      //expect(instance).to.be();
    });

    it('should have the property medianBalance (base name: "medianBalance")', function() {
      // uncomment below and update the code to test the property medianBalance
      //var instance = new YapilyApi.EnrichedPredictedBalance();
      //expect(instance).to.be();
    });

    it('should have the property _90percentileBalance (base name: "90percentileBalance")', function() {
      // uncomment below and update the code to test the property _90percentileBalance
      //var instance = new YapilyApi.EnrichedPredictedBalance();
      //expect(instance).to.be();
    });

    it('should have the property _10percentileBalance (base name: "10percentileBalance")', function() {
      // uncomment below and update the code to test the property _10percentileBalance
      //var instance = new YapilyApi.EnrichedPredictedBalance();
      //expect(instance).to.be();
    });

  });

}));
