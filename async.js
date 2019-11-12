
/*veja que tudo vem eseguito de modo sincrono primeiro
faz uma depois faz a outra.Mas se quisessemos que ele fossem assincronas
como deveramos fazer*/

function fa(inizio,fine){
for(var i= inizio; i<fine; i++){
	console.log("fa: "+i);
}
	return "fa ha finito";
}

function fa_reverse(inizio,fine){
for(var i= fine; i>inizio; i--){
	console.log("fa_reverse: "+i);
}
	return "fa_reverser ha finito";
}

console.log("parto com 2 chamadas");
fa(1,10);
fa_reverse(1,5);

console.log("fim");
