var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/?req=duepiudue&res=amor', function (req, res) {
  res.send('4');
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//gestire una url que invece de 1 parametro me faca 2 DA FAREEEEEEEEEE