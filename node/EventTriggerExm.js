var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', function () {
    console.log('data received successfully');
});

eventEmitter.emit('data_received');

eventEmitter.once('data_once', function () {
    console.log('one time event occured');
})

eventEmitter.emit('data_once');

eventEmitter.emit('data_once');