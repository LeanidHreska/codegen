'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.deleteUser = function deleteUser (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.deleteUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next) {
  User.getUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
