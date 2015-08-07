'use strict';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var config = require('../../config/environment');
var stripe = require("stripe")(config.stripe.sk);

// TODO: refactor this into a module
exports.charge = function (stripeToken, amount, callback) {
  // TODO: create order id

  var charge = stripe.charges.create({
    amount: amount, // amount in cents, again
    currency: "usd",
    source: stripeToken,
    description: "Example charge" // Add order id here.
  }, function(err, charge) {
    console.log(err);
    console.log(charge);
    callback({err: err, charge: charge});
  });
}