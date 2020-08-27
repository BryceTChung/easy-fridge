const url = require('url');
const path = require('path');
const fs = require('fs');
const http = require('http');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(PORT, function () {
    console.log("server started on port " + PORT)
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/test', (req, res) => {
    console.log("in");
    console.log(req.body)
    res.send(req.body);
});