console.log("05- Let, const and Temporal Dead Zone");

/*

SUMMARY

Things learned:
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

*/ 

// console.log("A:", a, "B:", b); 
// let a = 10;
// var b = 100; 

// Eg: 2
// // console.log(a);  // Uncaught ReferenceError: Cannot access 'a' before initialization
// console.log(b);     // undefined
// console.log(x);     // Uncaught ReferenceError: x is not defined
// let a= 10;
// var b = 100;

// Eg: 3
// var b = 10;
// let a = 100;

// in console 
// window.b = 10
// window.a = undefined
// window === this // true
// this.b = 10;
// this.a = undefined

// Eg: 4
// let a = 10;
// let a = 12;
// Uncaught SyntaxError: Identifier 'a' has already been declared

// Eg: 5

// let a = 10;
// var a = 12;
// Uncaught SyntaxError: Identifier 'a' has already been declared

// var a = 10;
// let a = 13;
// Uncaught SyntaxError: Identifier 'a' has already been declared

// Both will give error

// CONST

// Eg: 6
// const a;
// a = 1000;
// Uncaught SyntaxError: Missing initializer in const declaration

// Eg: 7
// const a = 10;
// a = 19;
// Uncaught TypeError: Assignment to constant variable.

