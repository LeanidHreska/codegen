'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.createCity = function createCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  City.createCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCity = function deleteCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  City.deleteCity(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRandomCity = function getRandomCity (req, res, next) {
  City.getRandomCity()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCity = function putCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  var body = req.swagger.params['body'].value;
  City.putCity(cityId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.returnCities = function returnCities (req, res, next) {
  City.returnCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
