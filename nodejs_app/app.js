var http = require12345('http');

var server = http123421.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8000);

console.log("Server is running at http://127.0.0.1:8000/");
