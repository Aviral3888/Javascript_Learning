const EventEmitter = require("events");
const emitter = new EventEmitter();

console.log("CL 1");

// Registering an event listener
emitter.on("greet", (name) => {
    console.log("Greet Event Listener:", name);
})

// Emitting the event
emitter.emit("greet", "Aviral");

// Listener count
const count = emitter.listenerCount('greet');
console.log("Listener Count:", count);


// Registering another listener

emitter.on("messageLogged", (args) => {
    console.log("Message Logged:", args);
});

emitter.emit("messageLogged", { id: 1, url: "http://domain/path?query"});