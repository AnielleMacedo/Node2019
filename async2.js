/*outro exemplo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*/



function resolveConta() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}


//primeiro vc precisa declarar q a funcao èe assincrona
async function asyncCall() {
    console.log('begin async call');
    var result= await resolveConta(); //7 resolve cont è uma promessa de execucao
  	console.log(result);
    console.log("end asynccall:"+j);
  }


//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: 'resolved'
// }

asyncCall();
console.log("ciao");
var a= 10;
console.log(a);