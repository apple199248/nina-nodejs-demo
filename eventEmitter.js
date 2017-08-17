var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event',function(arg1){
	console.log('some_event is runing',arg1);
})

setTimeout(function(){
	event.emit('some_event',"这是参数");
},1000);