'use strict';


/**
 * create a city
 *
 * body CityForCreate Object with data
 * returns City
 **/
exports.createCity = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete city by id
 *
 * cityId String ID of city that needs to be deleted
 * returns City
 **/
exports.deleteCity = function(cityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return random city
 *
 * returns City
 **/
exports.getRandomCity = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * change city by id
 * Change city's data and return changed object
 *
 * cityId String ID of city to change
 * body CityForCreate Object with data
 * returns City
 **/
exports.putCity = function(cityId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return all cities
 *
 * returns List
 **/
exports.returnCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
}, {
  "country" : "Belarus",
  "capital" : false,
  "name" : "Gomel",
  "location" : {
    "lat" : 152.0,
    "long" : 42.0
  },
  "id" : "5b3df97558398d273c79db3f"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

