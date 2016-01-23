var express = require('express');
var bodyParser = require('body-parser');
var bodyParser = require('facebook-chat-api');
var port = process.env.PORT || 1337;

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));