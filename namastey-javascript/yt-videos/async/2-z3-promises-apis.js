console.log("2 - Promises APIs");

/*      ---------------         PROMISE APIs         ---------------     */
/* 
Talked about 
    1. Promise.all()
    2. Promise.allSettled()
    3. Promise.any()

*/


/*      -------     Promise.all()     -------     */

/*
Promise.all is a method that takes an array (or iterable) of promises and returns a single promise.
    •	This returned promise resolves when all the input promises have resolved.
    •	It rejects immediately if any one of the promises rejects.

📌 Key Points:
    •	Output is an array of resolved values (in the same order as input).
    •	If any promise fails, Promise.all fails fast with the first error it encounters.
*/

// Eg: 1 :: all passed
/*

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // Output: [10, 20, 30]
    })
    .catch((error) => {
        console.log(error);
    });

*/

// Eg: 2 :: some passed and some failed
/*

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Failed');
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error); // Output: "Failed"
    });

*/


/*      -------     Promise.allSettled()     -------     */

/*
Promise.allSettled is a method that takes an array (or iterable) of promises and returns a single promise that resolves after all input promises have settled (i.e., either fulfilled or rejected).

Important: It never rejects — it always resolves with an array describing the outcome of each promise.

📌 Key Points:
    •	It waits for all promises to either resolve or reject.
    •	It always resolves, never rejects.
    •	The result is an array of objects with:
    •	status: "fulfilled" and value: result — if the promise succeeded.
    •	status: "rejected" and reason: error — if the promise failed.
*/

// Eg: 1 :: some failed
/*
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Error occured");
const promise3 = Promise.resolve(20);

Promise.allSettled([promise1, promise2, promise3])
.then(function (results) {
    console.log(results); // [{"status":"fulfilled","value":10},{"status":"rejected","reason":"Error occured"},{"status":"fulfilled","value":20}]
})
*/

//Eg: 2 :: all passed
/*
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // [{"status":"fulfilled","value":10},{"status":"fulfilled","value":20},{"status":"fulfilled","value":30}]
    });
*/
