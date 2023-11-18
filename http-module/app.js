//HTTP module
const http = require('http');
//two props we have request and response.
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my home page');
  }
  if (req.url === '/about') {
    res.end('short long story');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>error</p>
  <a href="/">back to home page</a>
  `);
});

server.listen(5000);
