'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var AvailSchema = new Schema({
	startDate: Date,
	endDate: Date
});

var OfferSchema = new Schema({
	type: String,
	price: Number,
	unit: String,
	quantity: Number,
	// TODO: add remaining quantity
	// TODO: note that avails gets retrieved as a weird object?
	avails:[AvailSchema]
});

var ProductSchema = new Schema({
  // TODO: update this upstream
  seller: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  name: String,
  description: String,
  active: Boolean,
  imgurl: String,
  offers:[OfferSchema]
});

ProductSchema.statics.findByUser = function(id, cb){
	    console.log('ProductSchema.statics.findByUser');
	    console.log(id);
		return this.find({ seller: new ObjectId(id) }, cb);
	}
ProductSchema.statics.findByNameRegex = function(name, cb){
	    console.log('ProductSchema.statics.findByNameRegex');
	    console.log(name);
		return this.find({ name: new RegExp(name, 'i')}, cb);
	}
ProductSchema.statics.findByIds = function(ids, cb){
	    console.log('ProductSchema.statics.findByUser');
	    
	    var objectIds = [];

	    for(var i = 0; i < ids.length; i++) {
	    	objectIds.push(new ObjectId(ids[i]));
	    }

		return this.find({ _id: {$in:objectIds}}, cb);
	}
module.exports = mongoose.model('Product', ProductSchema);