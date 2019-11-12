var PORT = 41234;
var HOST = '172.20.211.5';

var dgram = require('dgram');
var message = new Buffer('Anielle!');

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);
  client.close();
});