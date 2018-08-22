var url = require('url');

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent', 'querystring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'), require('querystring'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Auth = factory(root.superagent, root.querystring);
  }
}(this, function(superagent, querystring) {
  'use strict';

  var exports = function() {

  }

  exports.prototype.createUrl = function(applicationId,userUuid,institutionId,callbackUrl,scope) {

                        authUrl = new url.URL('https://auth.yapily.com/direct/')
                        authUrl.searchParams.append('application',applicationId)
                        authUrl.searchParams.append('user',userUuid)
                        authUrl.searchParams.append('institution',institutionId)
                        authUrl.searchParams.append('callback',callbackUrl)
                        authUrl.searchParams.append('scope',scope)

                        return authUrl.href
                    }

  return exports;
}));


var url = require('url');

var createUrl = function(applicationId,userUuid,institutionId,callbackUrl,scope) {

    authUrl = new url.URL('https://auth.yapily.com/direct/')
    authUrl.searchParams.append('application',applicationId)
    authUrl.searchParams.append('user',userUuid)
    authUrl.searchParams.append('institution',institutionId)
    authUrl.searchParams.append('callback',callbackUrl)
    authUrl.searchParams.append('scope',scope)

    return authUrl.href
}

module.exports = {
    authDirectUrl : createUrl
}