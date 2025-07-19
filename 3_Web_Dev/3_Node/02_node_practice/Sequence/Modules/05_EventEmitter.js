// const EventEmitter = require("events");
// const emitter = new EventEmitter();

const {log, emitter} = require('./05_01_logger_event');

// Register an event listener
emitter.on("messageLogged", (args) => {
    console.log("Message Logged:", args);
});

log("This is a log message");

