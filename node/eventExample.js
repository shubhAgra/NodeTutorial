var event = require('events');

var eventEmitter = event.EventEmitter;

var emitter = new eventEmitter();

emitter.on('newListener', function (eventName) {
    console.log("Added listener for " + eventName + " events");
});

emitter.on('data_received', function () {

})

emitter.on('data_received1', function () {

})
