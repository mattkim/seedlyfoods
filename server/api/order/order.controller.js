'use strict';

var _ = require('lodash');
var Order = require('./order.model');
var stripe = require('../stripe/stripe.controller'); // TODO: double check this works.

exports.charge = function(req, res) {
  var token = req.query.token;
  var amount = req.query.amount;

  var chargeResult = stripe.charge(token, amount, function(chargeResult){
    console.log(chargeResult);
    var err = chargeResult.err;
    var chargeInfo = chargeResult.charge;

    if(err && err.type === 'StripeCardError') {
      res.status(500).json(err);
    } else {
      res.status(200).json(chargeInfo);
    }
  });
  //if (err && err.type === 'StripeCardError') {
      // The card has been declined
    //  console.log(err);
    //  return err;
    //} else {
    //  console.log(charge);
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
    //  return charge;
    //}
};

// Get list of orders
exports.index = function(req, res) {
  Order.find(function (err, orders) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(orders);
  });
};

// Get a single order
exports.show = function(req, res) {
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) { return res.status(404).send('Not Found'); }
    return res.json(order);
  });
};

// Creates a new order in the DB.
exports.create = function(req, res) {
  Order.create(req.body, function(err, order) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(order);
  });
};

// Updates an existing order in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Order.findById(req.params.id, function (err, order) {
    if (err) { return handleError(res, err); }
    if(!order) { return res.status(404).send('Not Found'); }
    var updated = _.merge(order, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(order);
    });
  });
};

// Deletes a order from the DB.
exports.destroy = function(req, res) {
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) { return res.status(404).send('Not Found'); }
    order.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}