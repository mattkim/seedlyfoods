'use strict';

var express = require('express');
var controller = require('./s3.controller');

var router = express.Router();

router.get('/signupload', controller.signupload);

module.exports = router;