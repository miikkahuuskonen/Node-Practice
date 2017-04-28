// espressin käyttöönotto

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// HTTP metodi
app.get('/', function(req, res){
    res.send('<html>Hello World</html>');

});

// HTTP metodi
app.get('/api', function(req, res){
    res.json({firstname: 'John', lastname: 'Doe'});

});
// sama kuin spring PathVariable
app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body><h1>Person ' + 
    req.params.id + '</h1></body></html>');
});


app.listen(port);


