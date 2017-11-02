const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const mock = require('./db-api.js');
console.log(mock.generateAgents);
//console.log(router);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);