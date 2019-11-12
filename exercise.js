/* protocollo CASE SENSITIVE: il chiamante prevede questo primo messaggi QUE VERRA SEMPRE no inicio da mensagem 
1)"PROTO1", se ricevuto Ok , se non ricevuto: disconnect (SE ARRIVA MINUSCULO NAO ACEITA)

altri messaggi:
"WHOAREYOU" , a cui respondo con un nome che decido io server!  
"RANDOM(coloca um numero ex.57) a cui rispond0 com un numero random inteiro da 1 a 57. entao se o primeiro messagio 
n for PROTO1 ele n te responde e a conexao cai, nao è stabilita pois n se responde messagio de cortesia pra u hacker 
"BYE" : chiede al server di buttare giu il socket 

adicionar um novo comando p proxima licao
"NETLIST" che chiede al server la lista COMMA SEPARATA degli IP:porta dei conessi, pede ao server pra dizer quais sao os outros clientes
depois evolver esse protocolo 1 para um protocolo. ESSE FILE PODERIA SER UM JSON 


PROXIMA VEZ NOS METERMOS NOSSOS SERVERS EM COMUNICACAO COM OS OUTROS*/


const net = require('net');
const porta = 2000;
const serverName= 'ANIELLE';


//como quero fazer varios comandos sem usar if utilizo as regular expressions p testar os comandos
const commands_re= {
	PROTO1: /^PROTO1/g,
	WHOAREYOU: /^WHOAREYOU/g,
	BYE: /^BYE/g,
	RANDOM: /^RANDOM\((\d+)\)/ //no incio da stringa deve ser nome random com1 inteiro ou mais entre paretnterses e g significa
};





const server = net.createServer((socket) => {
  
  console.log('client connected');

//type of p testar propr de 1 objeto
  socket.on('data', (mydata) => { //qdo la conessione c vem terminada com end
    console.log('ricevuto da ' + socket.remoteAddress+ ':' +socket.remotePort+' ' +mydata+'\r\n');

    if (typeof socket.proto1 === 'undefined') {
    	//significa q non ha mai ricevuto proto1 da cliente
    	if (commands_re.PROTO1.test(mydata)) {  //
    		console.log('cambio stato al socket: connected');
    		socket.proto1 = 'connected';
    		socket.write('Bem vindo!');  //da uma resposta q vc entrou na conexao
    	}else{
    		//da protocolo decide di buttare giu la conessione com o end
    		console.error('REMOTE ERROR :Coamndo non consentito nello stato indeterminato, conexao terminada!');
    		socket.end();
    	}

    }else if(socket.proto1 === 'connected') {
    	//significa q ha ricevuto proto1 da cliente
    	if (commands_re.WHOAREYOU.test(mydata)) {
    		socket.write(serverName+'\r\n');
    	}else if(commands_re.BYE.test(mydata)){
    		console.log('conexao terminada by cliente with BYE');
    		socket.end();

    	}else if(commands_re.RANDOM.test(mydata)){
    	var n= mydata.toString().match(commands_re.RANDOM)
    	console.log('ricevuto random request 1..'+n[1]);
    	r= Math.ceil(Math.random()*n[1]);
    	socket.write(r+'\r\n');
    	}else {
    		console.warn('WARNING: Coamndo nao gestito'+mydata);
    	}
    }else{
    	//proto1 è definito ma non
    	console.warn('WARNING: stato del socket nao gestito'+socket.proto1);
    }

  });

 socket.on('end', ()=>{
   console.log('client disconnected');//se desconecta
 });


//   socket.write('hello\r\n');//n precisa escreve nada antes
//   //c.pipe(c);//
});
 
server.on('error', (err) => { //qdo o server vem aceso
  throw err;  //lanca excecao
});

server.listen(porta, () => { //faz partir o server sulla porta 8124
  console.log('server bound na porta'+ porta);
});






