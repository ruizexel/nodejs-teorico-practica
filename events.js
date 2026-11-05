const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.emit();
customEmitter.on('response', (data, SeconData) => {
    console.log('received ' + SeconData)
    console.log(data);
})

customEmitter.emit('response', 'Hello world', "123");
customEmitter.emit('response', 'Santiago', '467');
