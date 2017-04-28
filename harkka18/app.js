// projektin aloittamiseksi annettiin komennot
// npm init
// npm install express --save
// npm install mysql --save
// npm install ejs --save
// entry-point muutettu app.js nyt ennen index.js

// Meaning of rest: HTTP verbs and URL's mean something

var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);

    var con = mysql.createConnection({
        host: "localhost",
        user: "jusju",
        password: "zyMUbR82p",
        database: "jusju"
    });
    con.query('SELECT username, firstname, lastname FROM webuser2',
        function (err, rows) {
            if(err) throw err;
            console.log(rows);
            console.log(rows[0].Firstname);
        }
    );

    next();
});
htmlController(app);
apiController(app);
app.listen(port);