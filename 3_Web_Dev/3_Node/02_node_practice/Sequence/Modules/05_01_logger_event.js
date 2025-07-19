const EventEmitter = require('events');
const emitter = new EventEmitter();

const url = "http://logger_domain/path?query";

function log(message) {
    console.log(message);

    // Raise an event
    emitter.emit("messageLogged", {id: 1, url: url})
};

module.exports.log = log;
module.exports.emitter = emitter;

// console.log(module);