const Logger = require('./06_class_logger_eventEmitter');

let logger = new Logger();

logger.on("messageLogged", (args) => {
    console.log("Message Logged:", args);
});

logger.log("This is a log message");