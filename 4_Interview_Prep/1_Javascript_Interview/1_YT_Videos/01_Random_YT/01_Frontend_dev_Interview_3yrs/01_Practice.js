/*
YT Video
Channel - ReactJS Developer Interview Series
Link: https://youtu.be/Fnx3xBjFQ_Q?si=6lMdQlavzdEbxJZJ
*/



// Q1: O/P ?

/*
var a = 12;

console.log(a * 12); // Multiplication - 144
console.log(a ** 12); // Power Operator - Math.pow(12, 12);
*/




// Q2: Will salary print ?

/*
"use strict";

function test() {
    salary = 2000;
    console.log("Salary:", salary)
}

test();
*/

// Sol: without "use strict" salary will be printed, with strict mode, it will give Uncaught ReferenceError.




// Q3: O/P ?

/*
function test() {
    console.log(test.abc);
}

test(); // undefined

test.abc = 400;
test.abc = 600;

test(); // test
*/





// Q4: O/P ?

// console.log(val);
// var val = "2";
// console.log(val);

// with var output will be 
// undefined
// 2




// Q5: O/P ?

// console.log(val);
// let val = "2";
// console.log(val);

// with let output will be 
// error: Uncaught ReferenceError: Cannot access 'val' before initialization




// Q6: O/P ?

// console.log({} == {}) 
// console.log({} === {}) 

/*
O/P will be 
false
false
    Because Object is reference type and both {} are refering to different places in memory -- so false
    •	Every {} creates a new object.
    •	Objects are compared by reference, not by content.
    •	So {} === {} is false — they’re different objects in memory.
*/





// Q7. Shallow Copy vs Reference Copy

/*
let obj = {
    name: "Amit"
}

let obj2 = {  // Shallow Copy... Hence print Amit
    ...obj
}

// let obj2 = obj; // Reference Copy ... Hence print Jay ... basically a new obj will not be created in this case and obj2 will have a reference of the memory of obj only... so changing one will affect both objects 

obj2.name = "Jay"

console.log(obj.name);
console.log(obj2); // {name : "Jay"} in both cases

*/






// Q8: Type of

/*
let a = 10;
let b = new Number(10);
let c = 10;

console.log(a === b) // false
console.log(b === c) // false
console.log("Type of -> a:", typeof a, "-> b:", typeof b, "-> c:", typeof c, typeof typeof a); // Type of -> a: number -> b: object -> c: number string

*/





// Q9: O/P

/*
function test(record) {
    if (record == { age: 28 }) {
        console.log("You are an adult");
    }
    else if (record === { age: 28 }) {
        console.log("You are still an adult");
    }
    else {
        console.log("No Record");
    }
};

test( { age: 28 } )  // will give - No Record

let record = {};
test( record.age = 28) // still gives - No Record

*/

// NOTE : You cannot write record == { age: 28 } and expect it to be true unless record and { age: 28 } are literally the same object — which they never are unless assigned beforehand.


