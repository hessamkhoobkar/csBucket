const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Home Page</h1>');
    res.end();
    return;
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>About Page</h1>');
    res.end();
    return;
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Contact Page</h1>');
    res.end();
    return;
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Page Not Found</h1>');
    res.end();
    return;
  }

})

server.listen(6014)
