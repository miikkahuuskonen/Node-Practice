// "systeemikirjaston" tuonti
var http = require('http');
var fs = require('fs');

// funktiot ovat javascriptissä first class eli funktion ovat objekteja

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);
}).listen(8888, '127.0.0.1');