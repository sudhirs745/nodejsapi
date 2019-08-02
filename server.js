const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3200;
const server = http.createServer(app);
console.log("server start port no "+port);
server.listen(port);
