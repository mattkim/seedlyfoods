'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LineItem = new Schema({
  seller: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  product: {type:Schema.Types.ObjectId, ref:'Products', index: true}
});

var OrderSchema = new Schema({
  buyer: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  amount: Number,
  lineItems: [LineItem]
});

module.exports = mongoose.model('Order', OrderSchema);