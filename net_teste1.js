//per importare la libreria net, ele usa a contante p n poder reassegnar o objeto
const net = require('net');
consta porta = 2000;
//https://nodejs.org/docs/latest-v11.x/api/net.html#net_net_createserver_options_connectionlistener

/*cria um objeto e tem uma callback declarada como arrow function*/



const server = net.createServer((socket) => {
  // 'connection' listener
  //questa funzione viene chiamata quando si ricevono dati sul socket da parte del server
  console.log('client connected');

socket.on('data',(mydata)=>{ 
	console.log('ricevuto da: '+socket +mydata+'\r\n');
});

  socket.on('end', () => { //qdo la conessione c vem terminada com end
    console.log('client disconnected');//se desconecta
  });
  socket.write('hello\r\n');//escrevo contemporaneamente sulla conessione e escrevo hello
  //c.pipe(c);//prende quello che hai scritoo in tubo e mette in un altro tubo ma non funziona
});


server.on('error', (err) => { //qdo o server vem aceso
  throw err;  //lanca excecao
});


server.listen(porta, () => { //faz partir o server sulla porta 8124
  console.log('server bound na porta'+ porta);
});

//ci sara un evento sui data Event:data
/*Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by socket.setEncoding().

Note that the data will be lost if there is no listener when a Socket emits a 'data' event.*/