const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);

//var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.send(Buffer.from('ANi'), 41234, '172.20.211.5');
s.send(Buffer.from('testando'), 41234, '172.20.211.5');


//enviar um datagrama a questo indirizzo: 172.20.211.5:41234

// Prints: server listening 0.0.0.0:41234

//alt 96 p fazer carater americano

