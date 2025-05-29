console.log("13 - setTimeout Issues and Main thread blocking");

/*

Things learned:
1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms. 
2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

*/

// Eg: 1 - General Example
// console.log("start");
// setTimeout(() => {
//    console.log("Callback Ends");
// }, 5000);
// console.log("end");


// Eg: 2 - Blocking main thread for 10 seconds
// Blocking time using Javascript dates

console.log("start");
setTimeout(() => {
   console.log("Callback Ends");
}, 5000);
console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <= startDate + 10000) { // Till 10secs from method initiation, loop will continue to work
    endDate = new Date().getTime(); // endDate gets updated each millisec 
}

console.log("While expires");

// This is the whole Concurrency Model in Js