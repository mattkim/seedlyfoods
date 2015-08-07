'use strict';

var express = require('express');
var controller = require('./stripe.controller');

var router = express.Router();

// TODO: router.use?
router.get('/charge', controller.charge);

module.exports = router;