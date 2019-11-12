// function resolveAfter2Seconds() {
//   return new Promise(resolve => { // retorna aquilo que tem na promessa
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// //vc pode usar a modalidade async await per resolver a chamada asincrona em sincrona
// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: 'resolved'
// }

// asyncCall();
// var a= 10;
// console.log(a);
//----------------------------------------------------------------------------------------------------------

// console.log('before');
// setTimeout(() =>{
// 	console.log('resolved dopo di 2 secondi');
// },2000);

// console.log('after');

//a che punto eu me fermo. como saber se a soma tanto de a e b atingiu 200, samos u intervalo
console.log('before');
var a =0;
var b = 0;

var intervaloa = setInterval(() =>{
	console.log('a='+a);
	a++;
},200);


var intervalob = setInterval(() =>{
	console.log('b='+b);
	b++;
},500);


//qual è o problema que para no meo do programa? pq devo ser seguro a 100 poe cento que mi fermero
//devo fazer com que se per caso mi perdo posso recuperar de onde eu parei
setInterval(function(){
	if((a+b) >= 100){
		clearInterval(intervaloa);
		clearInterval(intervalob);
	}
},1000);//intervalo em segundos

console.log('after');