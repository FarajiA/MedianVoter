var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');
var bodyParser = require('body-parser');
var cors = require('cors');

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
*/
// Map the routes
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);