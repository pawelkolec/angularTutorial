var express = require('express');
var fs = require('fs');
var open = require('open');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');

var config = require('./config/config'); 
var phones = require('./server/phones'); 
var phoneDetails = require('./server/phoneDetails'); 

var app = express();
var PORT = 8000;
var STATIC_DIR = __dirname;

if(process.env.NODE_ENV == 'production') {
	STATIC_DIR += '/dist/';
}
else {
	STATIC_DIR += '/app/';
}

app.use(logger('dev'));
app.use(express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/phone", express.static(STATIC_DIR));

//api configuration
app.get('/api/phones', getPhones);
app.get('/api/phones/:phoneID', getPhoneDetails);

//redirect all requests to main file
app.get('*', function(req, res) {
	res.sendFile(path.join(STATIC_DIR + '/index.html'));
});

// connect to mongo db
mongoose.connect(config.database, function(err) {
	if(err) {
        log('connection error', err);
    } 
	else {

		app.listen(PORT, function () {
			open('http://localhost:' + PORT + '/');
			logger('Example app listening on port ' + PORT + '!');
		});
    }
});

function getPhones(req, res) {
	
	phones.find({}, function (err, dbPhones) {
		
		if(err) throw err;
		
		if(dbPhones) {
			res.status(200).json(dbPhones);
		}
		else {
			res.status(409).json({success: false, message: "Phones is null"});
		}
	});
}

function getPhoneDetails(req, res) {
		
	phoneDetails.findOne({id: req.params.phoneID}, function (err, dbPhone) {
		
		if(err) throw err;
		
		if(dbPhone) {
			
			res.status(200).json(dbPhone);
		}
		else {
			res.status(409).json({success: false, message: "Phone not found"});
		}
	});
}