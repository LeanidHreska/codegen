'use strict';


/**
 * create product
 * create a product with passed data
 *
 * body ProductForCreate Object with data
 * returns Product
 **/
exports.createProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "color" : "black",
  "id" : "5b3df97558398d273c79db3f",
  "title" : "Playstation 3"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete product by id
 *
 * productId String ID of product that needs to be deleted
 * returns Product
 **/
exports.deleteProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "color" : "black",
  "id" : "5b3df97558398d273c79db3f",
  "title" : "Playstation 3"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get product by id
 * return product by id
 *
 * productId String ID of product to get
 * returns Product
 **/
exports.getProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "color" : "black",
  "id" : "5b3df97558398d273c79db3f",
  "title" : "Playstation 3"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all products
 * Returns all products
 *
 * returns List
 **/
exports.getProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "color" : "black",
  "id" : "5b3df97558398d273c79db3f",
  "title" : "Playstation 3"
}, {
  "color" : "black",
  "id" : "5b3df97558398d273c79db3f",
  "title" : "Playstation 3"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

