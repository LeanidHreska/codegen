'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authenticateUserFacebook = function authenticateUserFacebook (req, res, next) {
  Auth.authenticateUserFacebook()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authenticateUserLocale = function authenticateUserLocale (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.authenticateUserLocale(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
