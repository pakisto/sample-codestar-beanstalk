var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World! v1.0",
    "Env": process.env.NODE_ENV
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World! v1.0",
    "Env": process.env.NODE_ENV
  });
});

app.listen(port);
module.exports = app;
