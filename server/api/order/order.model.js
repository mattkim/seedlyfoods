'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var LineItem = new Schema({
  seller: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  product: {type:Schema.Types.ObjectId, ref:'Products', index: true}
});

var OrderSchema = new Schema({
  buyer: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  amount: Number,
  lineItems: [LineItem]
});

OrderSchema.statics.findByBuyer = function(id, cb){
	    console.log('OrderSchema.statics.findByBuyer');
	    console.log(id);
		return this.find({ buyer: new ObjectId(id) }, cb);
	}
// TODO: note I wonder if this is super inefficient, remember to add index.
OrderSchema.statics.findBySeller = function(id, cb){
	    console.log('OrderSchema.statics.findBySeller');
	    console.log(id);
		return this.find({ 'lineItems.seller' : new ObjectId(id) }, cb);
	}

module.exports = mongoose.model('Order', OrderSchema);