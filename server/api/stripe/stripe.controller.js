'use strict';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("pk_test_VCaRLwUvXdvAMUyk2ONw5YiH");

// TODO: refactor this into a module
exports.charge = function (req, res) {
  // TODO: create order id

  // (Assuming you're using express - expressjs.com)
  // Get the credit card details submitted by the form
  var stripeToken = req.query.token;
  var amount = req.query.amount;

  var charge = stripe.charges.create({
    amount: amount, // amount in cents, again
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log(err);
      // Set the error to the res variable.
      res.status(500).send(err);
    } else {
      console.log(charge);
      // TODO: call the orders endpoint and then store
      // all data we need for orders.
      // order id
      // amount
      // billing address
      // shipping address
      // buyer account id
      // seller account id
      // refund status
      // refund amount
      // what we used? Stripe
      // tax?
      // shipping?
      // Stripe tax?
      res.status(200).json([charge]);
    }
  });
}

function handleError(res, err) {
  return res.status(500).send(err);
}