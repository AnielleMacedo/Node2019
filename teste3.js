//per importare la libreria net, ele usa a contante p n poder reassegnar o objeto
const net = require('net');
const porta = 2000;



//https://nodejs.org/docs/latest-v11.x/api/net.html#net_net_createserver_options_connectionlistener
/*cria um objeto e tem uma callback declarada como arrow function*/
const server = net.createServer((socket) => {
  // 'connection' listener
  //questa funzione viene chiamata quando un cliente si conecta
  console.log('client connected');

//callback que parte sempre
  socket.on('data', (mydata) => { //qdo la conessione c vem terminada com end
    console.log('ricevuto da ' + socket.remoteAddress+ ':' +socket.remotePort+' ' +mydata+'\r\n')
    
  });

 socket.on('end', ()=>{
   console.log('client disconnected');//se desconecta
 });


  socket.write('hello\r\n');//escrevo contemporaneamente sulla conessione e escrevo hello
  //c.pipe(c);//
});
 
server.on('error', (err) => { //qdo o server vem aceso
  throw err;  //lanca excecao
});

server.listen(porta, () => { //faz partir o server sulla porta 8124
  console.log('server bound na porta'+ porta);
});
