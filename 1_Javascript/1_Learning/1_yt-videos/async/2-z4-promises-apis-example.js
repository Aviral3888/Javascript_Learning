console.log("2 - Promises apis Examples");


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Success");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Success");
    }, 2000);
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P4 Fails");
    }, 500);
})


/*      -------     Promise.all()     -------     */

/*
Promise.all([p1, p2, p3, p4])
.then((res)=> {
    console.log("Result:", res);
})
.catch((err) => {
    console.error("Error:", err);
})
*/


/*      -------     Promise.allSettled()     -------     */

/* 
Promise.allSettled([p1, p2, p3, p4])
.then((res)=> {
    console.log("Result:", res);
})
.catch((err) => {
    console.error("Error:", err);
})
*/

// OUTPUT
// [
//     {
//         "status": "fulfilled",
//         "value": "P1 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P2 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P3 Success"
//     },
//     {
//         "status": "rejected",
//         "reason": "P4 Fails"
//     }
// ]



/*      -------     Promise.race()     -------     */

/* 
Promise.race([p1, p2, p3, p4])
.then((res)=> {
    console.log("Result:", res);
})
.catch((err) => {
    console.error("Error:", err);
})
*/
// OUTPUT: Result: P2 Success (P4 timeout in 2000 ms)
// OUTPUT: Error: P4 Fails (P4 timeout in 500 ms)



/*      -------     Promise.any()     -------     */

/* 
Promise.any([p1, p2, p3, p4])
.then((res)=> {
    console.log("Result:", res);
})
.catch((err) => {
    console.error("Error:", err);
})
*/
// OUTPUT: Result: P2 Success (P4 timeout in 2000 ms)

/* 
Promise.any([p1, p2, p3, p4])
.then((res)=> {
    console.log("Result:", res);
})
.catch((err) => {
    console.error("Error:", err);
    console.log(err.errors)
})
*/

// OUTPUT: Error: AggregateError: All promises were rejected (when all promises are rejected) 
// OUTPUT of console.log(err.errors) -> ['P1 Success', 'P2 Success', 'P3 Success', 'P4 Fails']