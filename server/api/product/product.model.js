'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var AvailSchema = new Schema({
	startDate: Date,
	endDate:Date
});

var OfferSchema = new Schema({
	type: String,
	price: Number,
	unit: String,
	quantity: Number,
	avails:[AvailSchema]
});

var ProductSchema = new Schema({
  _user: {type:Schema.Types.ObjectId, ref:'Users', index: true},
  name: String,
  description: String,
  active: Boolean,
  imgurl: String,
  offers:[OfferSchema]
});

ProductSchema.statics.findByUser = function(id, cb){
	    console.log('ProductSchema.statics.findByUser');
	    console.log(id);
		return this.find({ _user: new ObjectId(id) }, cb);
	}

module.exports = mongoose.model('Product', ProductSchema);