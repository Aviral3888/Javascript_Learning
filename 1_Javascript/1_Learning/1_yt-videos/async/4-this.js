"use strict";

console.log("4 - this in javascript");

/*

Things learned:

1. "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)
2. "this" in a function depends on 2 things
    a. strict / non strict mode (in strict mode, "this" is undefined, in non strict mode, "this substitution" takes place and "this" points to globalObject)
    b. how the function is being invoked (if we invoke the function using the global object in strict mode, then "this" will point to that globalObject)
3. "this" in a method always points to the object that is used to invoke the method.
4. call, apply & bind are used to share a method with another object (hence the "this" keyword reference would also change accordingly)
5. "this" inside arrow function refers to the enclosing lexical context
6. "this" in DOM points to the HTML element itself on which it is being used

*/


var global_a = "Global var";  // declared in global object
let global_b = "Global let";  // declared in script 


/*       this in global scope       */

// console.log(this)  // window object
// console.log(this.global_a, this.global_b); // Global var, undefined
// console.log(global_a, global_b); // Global var, Global let



/*       this inside a function       */
function checkThisInsideFunction() {

    // the value dependes on strict / non strict mode

    // non - strict mode
    // console.log(this)  // window object
    // console.log(this.global_a, this.global_b); // Global var, undefined
    // console.log(global_a, global_b); // Global var, Global let

    // strict mode
    // console.log(this)  // undefined
    // // console.log(this.global_a, this.global_b); // It will give error, as this is undefined
    // console.log(global_a, global_b); // Global var, Global let // this works

}
// checkThisInsideFunction();



/*       this in strict mode - (this substitution)       */

// The value of this keyword inside a function is undefied. 
// But, because of this substitution in Js, the this keyword becomes equal to globalObject. (This Happens only in Non-Strict mode)



/*       this keyword value depends on how the function is called       */

function test() {
    console.log("inside test function:\n", this);
}

// test(); // undefined
// window.test(); // window

// When a function is called without any reference (like in test()) the this keyword becomes undefined. Otherwise this keyword refers to the calling object.



/*       this inside a object's method      */

const obj = {
    a: 10,
    test: function () {
        console.log("inside obj object:\n", this);
    }
}
// obj.test(); // {a: 10, test: ƒ}

// Inside an objects method, the this keyword refers to the calling object - (as per point:: this keyword value depends on how the function is called)



/*       call, apply, bind methods (sharing methods)      */

const student = {
    name: "Amit",
    printName: function () {
        console.log(this);
    }
}
student.printName();

const student2 = {
    name: "Deepak"
};

student.printName.call(student2); // Deepak

// The value of this can be modified using call, apply, bind methods



/*       this inside arrow function       */

// Arrow functions don't provide their own "this" binding, it retains the value of the enclosing lexical context.

const obj2 = {
    a: 10,
    test: () => {
        console.log(this);
    }
};
// obj2.test(); // this will be globalObject (Window in this case) -> this is because in arrow functions, this doesn't have its own value whereas it retains the value of the enclosing lexical context - in this case the global object



/*       this inside nested arrow function       */

const obj3 = {
    a: 12,
    test: function () {
        // enclosing lexical context
        const testArrow = () => {
            console.log(this);
        }
        testArrow();
    }
};
// obj3.test(); // {a: 12, test: ƒ} :: Because in this case the lexical context for the testArrow is the obj3.



/*       this inside DOM       */
// the value of this => reference to the HTMLelement