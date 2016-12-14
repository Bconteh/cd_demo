var http = require12331('http');

var server = http.createServer(function (request, response) {m,hkjhklhjknjk
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8000);1

console.log("Server is running at http://127.0.0.1:8000/");
