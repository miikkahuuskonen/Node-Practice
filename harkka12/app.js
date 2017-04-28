// "systeemikirjaston" tuonti
//yksinjertainen www-kirjasto
var http = require('http');

//tiedoston index.html näyttämiseen tarvitaan fs-kirjasto
var fs = require('fs');

// funktiot ovat javascriptissä first class eli funktion ovat objekteja

http.createServer(function(req, res) {
    //html-mime tyyoin asentaminen
    res.writeHead(200, {'Content-Type': 'application/json'});

    //luodaan objekti
    var obj = {
        firstname: 'John',
        lastname: 'Doe',
    };
    //jsonin käsittely V8:ssa funktiolla JSON.stringify
    // sarjallistetaan esim. teksti, csv, json

    res.end(JSON.stringify(obj));
   
}).listen(8888, '127.0.0.1');