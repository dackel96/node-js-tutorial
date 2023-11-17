//HTTP module
const http = require('http');
//two props we have request and response.
const server = http.createServer((req, res) => {
  res.write('Welcome to my home page');
  res.end();
});

server.listen(5000);
