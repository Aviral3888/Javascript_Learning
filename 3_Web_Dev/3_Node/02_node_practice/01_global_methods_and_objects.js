console.log("Checking the Global Methods");

console.log("console is a global object");

let timeoutId = setTimeout((arr) => {
    console.log("setTimeout called", arr);
}, 0, ["1", 2]);

let intervalId = setInterval(() => {
    console.log("setInterval called");
}, 1000);

let immediateId = setImmediate(() => {
    console.log("setImmediate Called");
})

// console.log("Final");
setTimeout(()=> {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    clearImmediate(immediateId);
    console.log("Cleared");
}, 2000);


setTimeout(() => {
    console.log("Printing Global objects");

    console.log("dirname:", __dirname);
    console.log("filename:", __filename);
    // console.log("process:", process);
    
}, 3000);


