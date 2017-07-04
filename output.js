// 阻塞是按顺序执行的，非阻塞是不按顺序执行的
// 异步编程依托回调来实现，但不能说使用了回调程序就异步化了

var fs = require("fs");

fs.readFile('input.txt',function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
});

console.log('code finished');
