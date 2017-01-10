var express = require('express');

var app = express();

var port = 3000;

// Set public folder from root to be the static directory
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function () {
    console.log("running server on port " + port);
});