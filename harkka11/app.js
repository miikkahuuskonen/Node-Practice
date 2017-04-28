// "systeemikirjaston" tuonti
var http = require('http');
var fs = require('fs');

// funktiot ovat javascriptissä first class eli funktion ovat objekteja

http.createServer(function(req, res) {
    //html-mime tyyoin asentaminen
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
   

   
}).listen(8888, '127.0.0.1');