// espressin käyttöönotto

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// HTTP metodi
app.get('/', function(req, res){
    res.send('<html>Hello World</html>');

});

app.listen(port);