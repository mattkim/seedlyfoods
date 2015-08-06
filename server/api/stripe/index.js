'use strict';

var express = require('express');
var controller = require('./stripe.controller');

var router = express.Router();

// TODO: is post right
router.get('/charge', controller.charge);

module.exports = router;