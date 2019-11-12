
var fs = require('fs');

fs.readFile('TEST.txt', function(err,data){
    if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
    }
	
	console.log(data);
});