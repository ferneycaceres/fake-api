const jsonServer = require('json-server');
const fs = require("fs");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const m = require('./db-api.js');

output = m.data();

fs.writeFile("db.json",JSON.stringify(output), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

console.log(output);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);