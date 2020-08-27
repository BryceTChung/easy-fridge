const url = require('url');
const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>hi</h1>');
    }
});
server.listen(5000, function () {
    console.log("server started");
});