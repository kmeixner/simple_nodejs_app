var http = require('http');
var dt = require('./mydatemodule'); // date module I made
var uc = require('upper-case'); // node module via "npm install upper-case"

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write('<br />'+uc.upperCase("Hello World!"));
  res.end();
}).listen(8080)