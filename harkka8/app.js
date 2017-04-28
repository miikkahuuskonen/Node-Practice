// "systeemikirjaston" tuonti
var http = require('http');

// funktiot ovat javascriptissä first class eli funktion ovat objekteja

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plane'});
    res.end('Hello world');
}).listen(8888, '127.0.0.1');