var express = require('express');

var app = express();

var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function () {
    console.log("running server on port " + port);
});