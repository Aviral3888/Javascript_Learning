console.log("2 - Promises APIs");

/*      ---------------         PROMISE APIs         ---------------     */
/*
Talked about
    1. Promise.all()
    2. Promise.allSettled()
    3. Promise.race()
    4. Promise.any()

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


/*      -------     Promise.allSettled()  [Safe Option]   -------     */

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



/*      -------     Promise.race()     -------     */

/*

📌 Definition of Promise.race
    •	Promise.race takes an array of promises (or any iterable of promises) and returns a new promise.
    •	This new promise resolves or rejects as soon as the first promise in the array settles (i.e., either fulfilled or rejected).
    •	The result of the first settled promise (whether success or failure) is used for the result of the Promise.race.

✨ Important Points:
    •	Promise.race does not wait for all promises.
    •	It only cares about the first one that settles (whether it resolves or rejects).
    •	Useful for timeouts, performance optimizations, etc.
*/

// Eg: 1
/*
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));
const promise3 = new Promise((reject) => setTimeout(reject, 1500, "Third"));

Promise.race([promise1, promise2, promise3])
.then((results) => {
    console.log("Resolved with:", results); // Resovled with First
})
.catch((err) => {
    console.log("Rejected with:", error);
})
*/

// Eg: 2
/*
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Second"));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, "Third Promise rejected"));

Promise.race([promise1, promise2, promise3])
.then((results) => {
    console.log("Resolved with:", results); 
})
.catch((err) => {
    console.log("Rejected with:", err); // Rejected with Third Promise rejected
})
*/



/*      -------     Promise.any()     -------     */

/*

Promise.any() takes an array of promises and returns a single promise that fulfills as soon as any one of the promises fulfills.
If none of the promises fulfill (all reject), then it rejects with an AggregateError containing all the rejection reasons.

🔥 Key Points
	•	It resolves with the first successful promise’s value.
	•	If all promises fail, it rejects with a special AggregateError object.
	•	It ignores rejections unless every promise rejects.
*/

// Eg: 1
/*
const p1 = Promise.reject("Error from p1");
const p2 = Promise.resolve("Success from p2");
const p3 = Promise.resolve("Success from p3");

Promise.any([p1, p2, p3])
  .then(result => console.log("Resolved with:", result)) //Resolved with: Success from p2
  .catch(error => console.log("Rejected with:", error));
*/

// Eg: 2
/*
const p1 = Promise.reject("Error from p1");
const p2 = Promise.reject("Error from p2");

Promise.any([p1, p2])
  .then(result => console.log("Resolved with:", result))
  .catch(error => {
    console.log("Rejected with AggregateError:");
    console.log(error.errors); // contains all individual errors
});

// Output:
// [
//     "Error from p1",
//     "Error from p2"
// ]
*/