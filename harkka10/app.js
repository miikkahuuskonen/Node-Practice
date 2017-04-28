// "systeemikirjaston" tuonti
var http = require('http');
var fs = require('fs');
var path = require('path');

// funktiot ovat javascriptissä first class eli funktion ovat objekteja

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8');
    var message = 'Hello Maailma...';

    // dynaamiseen templateen muuttujan arvon asettaminen
    html = html.replace('{Message}', message);
    res.end(html);
}).listen(8888, '127.0.0.1');