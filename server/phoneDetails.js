// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('phoneDetails', new Schema (
	{ 
		additionalFeatures: String, 
		android: { os: String, ui: String }, 
		availability: Array,
		battery: { standbyTime: String, talkTime: String, type: String },
		camera: { features: Array, primary: String },
		connectivity: { bluetooth: String, cell: String, gps: Boolean, infrared: Boolean, wifi: String },
		description: String,
		display: { screenResolution: String, screenSize: String, touchScreen: Boolean },
		hardware: { accelerometer: Boolean, audioJack: String, cpu: String, fmRadio: Boolean, physicalKeyboard: Boolean, usb: String },
		id: String,
		images: Array,
		name: String,
		sizeAndWeight: { dimensions: Array, weight: String },
		storage: { flash: String, ram: String }
	}, {collection: 'phoneDetails'}
));