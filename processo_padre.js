

const process=require('child_process');
console.log('processo padre avviato');
let child=process.fork(
   './processo_figlio.js', // path dello script da lanciare
   [],                      //array parametro da passare in linea
   {                       //opzioni varie
   }
);
console.log('ho lanciato: ',+child);

setInterval(function()  {
   console.log('padre vivo');
}, 3000);