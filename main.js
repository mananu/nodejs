var http = require("http");
console.log("Hello World");
http.createServer(function (request, response){
   response.writeHead(200, {'Content-Type': 'text/plain'}); 
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');