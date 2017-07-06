var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.on('data',function(chunk){
	data += chunk;
});

readerStream.on('end',function(chunk){
	console.log(data);
});

readerStream.on('error',function(err){
		console.log(err.stack);
});

console.log('program has finished');