var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// Set public folder from root to be the static directory
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {list: ['a', 'b'], title: 'Library'});
});

app.listen(port, function () {
    console.log('running server on port ' + port);
});