var fs = require('fs');
var static = require('node-static');

var file = new(static.Server)('./');

require('http').createServer(function (request, response) {
  file.serve(request, response, function (err, res) {
    if (err) { 
      response.writeHead(err.status, err.headers);
      response.end();
    } 
  });
}).listen(8080);
