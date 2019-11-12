let pippo=5;
console.log("global: "+pippo);

function test3(){
	console.log('test 3.1: '+pippo);
	{
		let pippo= 777;
		console.log('test 3.2: '+pippo);
		{
			let pippo=1000;
			console.log('test 3.3: '+pippo);
		}
	}

}


function test2(){
	let pippo=444;
	console.log("test2: "+pippo)
	test3()
}

function test1(a,b){
	let pippo=88;
	console.log("test1: "+pippo)
	test2()
}

test1() //chama pra ve testar todas as variaveis que saem na console
console.log("global2: "+pippo)