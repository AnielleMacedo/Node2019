let objeto = {}
//coloco um array vuoto dentro do objeto vuoto
objeto.persone=[];
objeto.persone[0] = {nome:'pippo',cognome: 'armitano'}

//quando impimo o objeto vejo o array criado dentro dele
//console.log(objeto);

objeto.persone[0] = {nome:'culo',cognome: 'armitano'}
console.log(objeto)

objeto.elencpersone= function () {
	for (let i = 0; i<objeto,persone.length; i++) {
		console.log('persona '+i+ ': '+objeto.persone[i])
	}
}
//formato json
let c = { persone:
	[{nome:'rossi',cognome: 'armitano'},
	 {nome:'pluto',cognome: 'armitano'}]

}

console.log(c)