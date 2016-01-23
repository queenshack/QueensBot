var express = require('express');
var bodyParser = require('body-parser');
var login = require('facebook-chat-api');

var port = process.env.PORT || 1337;
var fbuser = process.env.QNS_FBUSER;
var fbpass = process.env.QNS_PASS;

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

login({
    email: fbuser,
    password: fbpass
}, function callback(err, api) {
    if (err) return console.error(err);

    api.listen(function callback(err, message) {
        if (message.body.includes("@qbot"))
            api.sendMessage(message.body, message.threadID);
    });
});

app.listen(port, function() {
    console.log("Server is up  running at port: " + port);
});
