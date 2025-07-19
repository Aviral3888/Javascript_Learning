const EventEmitter = require('events');

class Logger extends EventEmitter {

    // method to log mesasge
    log(message) {
        console.log(message);

        this.emit("messageLogged", {id: 1, url: 'http://example.com'});
    }
}

module.exports = Logger;