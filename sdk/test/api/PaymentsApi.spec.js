/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.307
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
    instance = new YapilyApi.PaymentsApi();
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

  describe('PaymentsApi', function() {
    describe('createBulkPaymentAuthorisationUsingPOST', function() {
      it('should call createBulkPaymentAuthorisationUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createBulkPaymentAuthorisationUsingPOST
        //instance.createBulkPaymentAuthorisationUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBulkPaymentUsingPOST', function() {
      it('should call createBulkPaymentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createBulkPaymentUsingPOST
        //instance.createBulkPaymentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPaymentAuthorisationUsingPOST', function() {
      it('should call createPaymentAuthorisationUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPaymentAuthorisationUsingPOST
        //instance.createPaymentAuthorisationUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPaymentAuthorisationWithSortCodeUsingPOST', function() {
      it('should call createPaymentAuthorisationWithSortCodeUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPaymentAuthorisationWithSortCodeUsingPOST
        //instance.createPaymentAuthorisationWithSortCodeUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPaymentUsingPOST', function() {
      it('should call createPaymentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPaymentUsingPOST
        //instance.createPaymentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPaymentWithSortCodeUsingPOST', function() {
      it('should call createPaymentWithSortCodeUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPaymentWithSortCodeUsingPOST
        //instance.createPaymentWithSortCodeUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentStatusUsingGET', function() {
      it('should call getPaymentStatusUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPaymentStatusUsingGET
        //instance.getPaymentStatusUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentsUsingGET', function() {
      it('should call getPaymentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPaymentsUsingGET
        //instance.getPaymentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentAuthorisationUsingPUT', function() {
      it('should call updatePaymentAuthorisationUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updatePaymentAuthorisationUsingPUT
        //instance.updatePaymentAuthorisationUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
