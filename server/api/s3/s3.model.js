'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var S3Schema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('S3', S3Schema);