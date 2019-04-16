var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.route('/Node').get(function (req, res) {
    res.send('Tutorial on Node');
})

app.route('/Angular').get(function (req, res) {
    res.send('Tutorial on Angular');
})

app.route('/Java').get(function (req, res) {
    res.send("Tutorial on Java Get");
})
    .post(function (req, res) {
    res.send("Tutorial on Java Post");
})
    .put(function (req, res) {
    res.send("Tutorial on java PUT");
});

var server = app.listen(3000, function () {

});



