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
    instance = new YapilyApi.TerminatedTransactionStream();
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

  describe('TerminatedTransactionStream', function() {
    it('should create an instance of TerminatedTransactionStream', function() {
      // uncomment below and update the code to test TerminatedTransactionStream
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be.a(YapilyApi.TerminatedTransactionStream);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property transactionSchedule (base name: "transactionSchedule")', function() {
      // uncomment below and update the code to test the property transactionSchedule
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property scheduleConsistencyScore (base name: "scheduleConsistencyScore")', function() {
      // uncomment below and update the code to test the property scheduleConsistencyScore
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property nextExpectedTransactionDate (base name: "nextExpectedTransactionDate")', function() {
      // uncomment below and update the code to test the property nextExpectedTransactionDate
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property earliestTransactionDate (base name: "earliestTransactionDate")', function() {
      // uncomment below and update the code to test the property earliestTransactionDate
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property mostRecentTransactionDate (base name: "mostRecentTransactionDate")', function() {
      // uncomment below and update the code to test the property mostRecentTransactionDate
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property amountConsistencyScore (base name: "amountConsistencyScore")', function() {
      // uncomment below and update the code to test the property amountConsistencyScore
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property averageAmount (base name: "averageAmount")', function() {
      // uncomment below and update the code to test the property averageAmount
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

    it('should have the property missedTransactions (base name: "missedTransactions")', function() {
      // uncomment below and update the code to test the property missedTransactions
      //var instance = new YapilyApi.TerminatedTransactionStream();
      //expect(instance).to.be();
    });

  });

}));
