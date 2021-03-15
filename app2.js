const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('Tutorial event has occured');
});

// emits the tutorial event
eventEmitter.emit('tutorial');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let person = new Person('person');
let person2 = new Person('person2');

person.on('hi', () => {
    console.log(`Hello! I'm ${person.name}`);
});


person2.on('hi', () => {
    console.log(`Hello! I'm ${person2.name}`);
});

// these events will execute synchronously
person.emit('hi');
person2.emit('hi');