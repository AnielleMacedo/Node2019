const http = require('http');
// Create an HTTP server
const srv = http.createServer((req, res) => {
   if(req.url=='/duepiudue'){
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.end('<img src="https://media.istockphoto.com/photos/number-four-picture-id96361039?k=6&m=96361039&s=612x612&w=0&h=WMmRYEqziLGN6CqJ2VHEVilEs2dU93FJAbfofu-OiwI=">');
   }else{
       console.log('ricevuta la request:',req.url);
       res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('okay');
   }
});
srv.listen(1337, '127.0.0.1', () => {
   console.log("my tiny http server is listening..");
});