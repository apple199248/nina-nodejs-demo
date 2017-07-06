var fs = require('fs');

console.log('create directory /tmp/test ');

fs.mkdir("/tmp/test/",function(err){
	if(err){
		return console.error(err);
	}

	console.log('create directory successly');
})