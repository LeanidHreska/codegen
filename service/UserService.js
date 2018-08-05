'use strict';


/**
 * Delete user
 * delete user and return back
 *
 * userId String The name that needs to be deleted
 * returns User
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "Pass1234",
  "id" : "5b3df97558398d273c79db3f",
  "login" : "leonidgresko98@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all users
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "Pass1234",
  "id" : "5b3df97558398d273c79db3f",
  "login" : "leonidgresko98@gmail.com"
}, {
  "password" : "Pass1234",
  "id" : "5b3df97558398d273c79db3f",
  "login" : "leonidgresko98@gmail.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

