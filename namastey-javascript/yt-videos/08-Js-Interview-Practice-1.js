console.log("Js - Interview practice 1");

/*
Question 1: Explain Closure with example
*/

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// outer()();


/*
Question 2: What happens if we move var a= 10; before retuning inner;
*/

// function outer(b) {
//     console.log("outer: ", b);
//     function inner() {
//         console.log("inner:", a, b);
//     } 
//     let a = 10;
//     return inner;
// }

// outer(5)();
// Moving var a = 10; after inner() will have no change, as still it is in the scope of outer() and hence will be accessible to inner().


/*
Question 3: What if the outer function is nested inside another function;
*/

// function outest(c) {
//     function outer(b) {
//         console.log("outer: ", b, c);
//         function inner() {
//             console.log("inner:", a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     outer(5)();
// }

// outest(2);

// It will print: 10, 5, 2 [as all variables and their references will be accessible to inner function as inner forms a closure with outer() and outest() as well]


/*
Question 4: What if there is a variable in global scope with a conflicting name
*/

// function outest(c) {
//     function outer(b) {
//         console.log("outer: ", b, c);
//         function inner() {
//             console.log("inner:", a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     outer(5)();
// }
// let a = 100;

// outest(2);

// It will print : 10, 5, 2
// If a is not present inside outer function then : 100, 5, 2


/*
    DATA Hiding and Encapsulation [Data privacy using closures]
*/

// Eg 5:

// function counter() {
//     var count = 0;
//     return function increment() {
//         count++;
//         console.log(count);
//     }
// }

// counter1 = counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3

// Here: the count variable will not be accessible outside the counter(), but calling counter() will increment the counter;
