console.log("07.1 - Closures and setTimeouts examples");

// Normal SetTimeout Example

// function x(sec) {
//     console.log(`x -> print after ${sec} sec`);
// }

// setTimeout(function cb() {
//     x(1)
//     setTimeout(() => {
//        x(2) 
//     }, 1000);
// }, 1000);


/* 
    -------    IMPORTANT EG for CLOSURES    ------
*/

// Question 1

// function x () {
//     let i = 10;
//     setTimeout(() => {
//        console.log(i);
//     }, 1000);
//     console.log("Namastey Javascript");
// }

// x();

// Solution: First console.log("Namastey Javascript"); will run and then it will produce the result of setTimeout();


// Question 2
// Print 1 to 5 each after 1 sec

// My Solution

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i + 1);
//     }, 1000 * (i + 1));
// }
// This runs fine with let || but with var runs differently

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i + 1);
//     }, 1000 * (i + 1));
// }

// Prints: 
// 6
// 6
// 6
// 6
// 6


// His Solution

// Using LET
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i + 1);
//     }, 1000 * (i + 1));
// } 

// REASON
// var remains in the global scope, and each copy of function will point to the same reference of variable, which will be updated as soon as program starts to 5
// let creates its own block scope, hence each time the loop runs, i will point out to the value of i in the current block, and each block will be created when that loop runs, hence the value always changes 

// Using Var

function x() {
    for (var i = 0; i < 5; i++) {
        function interval(val) {
            setTimeout(() => {
                console.log(val + 1);
            }, val * 1000);
        }
        interval(i);
    }
}

x();

// Everytime this interval() is called, a new copy of i is created because of this closed function, a closure is formed, and each time interval runs, it points to the new closure which will have different values of i;


// NOTE: 
// Closure Example
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// outer()();

/*
This is a closure:
A closure happens when an inner function "remembers" variables from its outer (enclosing) function even after the outer function has finished executing.

✅ Yes, this is a textbook example of a closure.
*/

//Not Closure example
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner();
// }

// outer();

// Technically, this can be a closure, but cannot be used as a closure example, because it doesn't return the function, rather it returns the value