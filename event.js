var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('some_event',function (a1,a2) {
	console.log('first',a1,a2);
});

eventEmitter.on('some_event',function (a1,a2) {
	console.log('second',a1,a2);
});

eventEmitter.emit('some_event','one','two');