'use strict';


/**
 * Authenticate by Facebook
 *
 * no response value expected for this operation
 **/
exports.authenticateUserFacebook = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * authenticate and return valid JWT
 *
 * body UserCreds Object with user's creds
 * returns String
 **/
exports.authenticateUserLocale = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InByb2R1Y3RBZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjgyMzIxNCIsImlhdCI6MTUzMjU5MzI3OSwiZXhwIjoxNTMyNTk2ODc5fQ.4mQJDhz6sDO7MG8uLsGOnY7GtEbIa5IP2y_CR5qy4iY";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

