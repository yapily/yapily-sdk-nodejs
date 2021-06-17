/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.357
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
    instance = new YapilyApi.ApplicationUsersApi();
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

  describe('ApplicationUsersApi', function() {
    describe('addUserUsingPOST', function() {
      it('should call addUserUsingPOST successfully', function(done) {
        //uncomment below and update the code to test addUserUsingPOST
        //instance.addUserUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserUsingDELETE', function() {
      it('should call deleteUserUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteUserUsingDELETE
        //instance.deleteUserUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeleteUsersJobUsingGET', function() {
      it('should call getDeleteUsersJobUsingGET successfully', function(done) {
        //uncomment below and update the code to test getDeleteUsersJobUsingGET
        //instance.getDeleteUsersJobUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeleteUsersJobsUsingGET', function() {
      it('should call getDeleteUsersJobsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getDeleteUsersJobsUsingGET
        //instance.getDeleteUsersJobsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserUsingGET', function() {
      it('should call getUserUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUserUsingGET
        //instance.getUserUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersUsingGET', function() {
      it('should call getUsersUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUsersUsingGET
        //instance.getUsersUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startDeleteUsersJobUsingPOST', function() {
      it('should call startDeleteUsersJobUsingPOST successfully', function(done) {
        //uncomment below and update the code to test startDeleteUsersJobUsingPOST
        //instance.startDeleteUsersJobUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
