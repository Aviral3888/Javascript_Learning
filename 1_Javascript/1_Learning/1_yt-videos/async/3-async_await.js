console.log("3 - async await");


/*      -------    What are Async functions   -------     */

/*

    Things Learnt

• Async/await used for handling promises
• Async always return a promise
° Await can only used inside an async function
° Can only write await keyword infront of a promise
° While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point
° Use try catch for Error handling and can also use  . Catch() method
*/


/*
NOTE:
async functions always returns a promise. 

If returned promise - it will return as it is.
If non-promise value - it will wrap in a promise and then return
*/

// async function getName() {
//     const pr = new Promise((resolve, reject) => {
//         resolve("Promise resolved value");
//     })
//     return pr;
// }

// const dataPromise = getName();
// console.log(dataPromise); // returns a promise

// dataPromise.then(res => console.log(res)); // this will print the actual value - "Name" 



/*      -------    Using await along with async functions   -------     */

// Before async await

// Eg: 1
// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved");
// });
// function getData() {
//     p.then(res => console.log(res));
// }
// getData();


// Using async await 

// Eg: 2
// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved");
// });
// async function getData() {
//     const data = await p;
//     console.log("Data:", data); // Data: Promise resolved
// };
// getData();




/*      -------    Diving deep into async and await   -------     */

/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2500);
});

async function getData() {
    const data = await p;
    console.log("Data:", data); // Data: Promise resolved
};
getData();
*/