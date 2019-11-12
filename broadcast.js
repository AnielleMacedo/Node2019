//fare broadcast usando udp
 /*q envia p todos*/


const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const SECRETNUMBER=Math.ceil(Math.random()*100).toString();
const CHISONO='Anielle';
const PORT = 41234;
const BROADCAST_IP = '172.20.211.5';
let my_messagge;
server.on('error', (err) => {
   console.log(`server error:\n${err.stack}`);
   server.close();
  });
  server.on('message', (msg, rinfo) => {
  // console.log(server got: ${msg} from ${rinfo.address}:${rinfo.port});
  if(msg==SECRETNUMBER){
   console.log(`server ${rinfo.address} from ${rinfo.port} mi ha ucciso perchè ${msg}==${SECRETNUMBER}`);
   clearInterval(mytimer);
  }else{
   console.log(`server ${rinfo.address} from ${rinfo.port} mi ha mancato`);
  }
  });
  server.on('listening', () => {
   const address = server.address();
   console.log(`server listening ${address.address}:${address.port}`);
  });
  server.bind(41234);
  server.setBroadcast=true;
  let proiettile=1;


//ate aki fica tudo igual
let mytimer= setInterval(function(){
	console.log(CHISONO+ "Macedo");
	let my_message= proiettile.toString();
	proiettile++;
	server.send(my_message, 0, my_message.length, PORT, BROADCAST_IP,
	function(e){
		console.log('Ho spararato il numero: '+my_message);
		if(e) console.log(e);
		}); 
	}, 1000);



/*const dgram = require('dgram');
const server = dgram.createSocket('udp4');


const SECRETNUMBER= Match.ceil(Match.random()*100).toString();
const PORT= 41234;
const BROADCAST_IP = '172.20.211.255';
const CHISONO= 'ANI';


server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  //console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  if (msg == SECRETNUMBER) {
  	console.log( `${rinfo.address}:${rinfo.port}'Mi ha fotuto!');
  		clearInterval(mytimer);
  }
  else{
  	console.log(`${rinfo.address}:${rinfo.port});
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
server.setBroadcast= true;
let projetil = 1;

//ate aki fica tudo igual
let mytimer= setInterval(function(){
	console.log(true);
	my_message= projetil.toString();
	projetil++;
	server.send(my_message, 0, my_message.length, PORT, BROADCAST_IP,
			function(e)){
			console.log();
				if(e) console.log(e);
		}); 
	}, 1000);*/







//enviar um datagrama a questo indirizzo: 172.20.211.5:41234

// Prints: server listening 0.0.0.0:41234

//alt 96 p fazer carater americano

