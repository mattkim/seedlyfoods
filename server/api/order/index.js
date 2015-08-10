'use strict';

var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/findByBuyer/:id2', controller.findByBuyer);
router.get('/findBySeller/:id2', controller.findBySeller);
router.post('/', controller.create);
router.post('/charge', controller.charge);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;