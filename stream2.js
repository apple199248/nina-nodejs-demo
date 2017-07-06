var fs = require('fs');

var data='this is a input passage';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'utf8');
writeStream.end();

writeStream.on('finish',function(){
	console.log('have done');
});

writeStream.on('error',function(err){
	console.log(err.stack);
})

console.log('program has finished');