console.log("01-hoisting initiated at:", Date.now());


// Normal 

var x = 7;
function getName() {
    console.log("Inside function getName");
}

getName();
console.log(x);
console.log(getName);

/*
In the above Eg: everything is fine - as js executes line by line and all declarations are made before using them.
*/


// Hoisting in JS

getName1();          // getName() method runs and consoles the output
console.log(x1);     // undefined

var x1 = 7;
function getName1() {
    console.log("Inside function getName1");
}

console.log(getName1); // whole method code gets printed


/*
In the above example, the method gets executed by we get undefined for x, this is because of Execution Context in Js.

Before code execution - memory initialization takes place, where variables are assigned the value *undefined* and functions get copied.
So functions gets executed, but for variables, undefined is received. 
*/ 


// Another example of hoisting

getName2();          // getName() method runs and consoles the output
// console.log(x2);     // Error: Uncaught Reference: x2 is not defined

function getName2() {
    console.log("Inside function getName2");
}

console.log(getName2); // whole method code gets printed

/*
In the above example, since x2 is not even declared, hence no memory is allocated to x2 and it is not understood by program

Hence the difference between - undefined and not defined
*/


// Example - arrow functions and const

// getName3();             //  Error: Uncaught TypeError: getName3 is not a function
// console.log(x3);        // Error: Uncaught ReferenceError: Cannot access 'x3' before initialization
console.log(getName3);  // undefined

const x3 = 7;
var getName3 = () => {
    console.log("Inside function getName3");
}

console.log(getName3); // whole method code gets printed

/*
Variables declared using - let and const, and arrow functions are not hoisted in javascript
*/