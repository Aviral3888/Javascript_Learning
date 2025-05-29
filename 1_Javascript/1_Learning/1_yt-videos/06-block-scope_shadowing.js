console.log("06 - block scope and shadowing");

/*

SUMMARY

Things learned:
1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

*/

{
} // This is a Block
// Used to group multiple statements together - which can be used where Js expects single statements.

// Eg: 1
/*
{
    console.log("This is a block");

    var a = 10;
    let b = 20;
    const c = 30;
    const d = 40;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
*/

// Error:
/*
This is a block
10
20
30
10
Uncaught ReferenceError: b is not defined

*/

// SHADOWing

// Eg: 2

/*
var a = 10;
let b = 20;
const c = 30;
{
    var a = 11;
    let b = 21;
    const c = 31;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

*/

/*
Output

11
21
31
11
20
30

*/

// Shadowing in function scope

// const a = 10;
// function num() {
//     const a = 20;
//     console.log(a);
// }

// console.log(a); // 10
// num(); // 20

// Lexical Block Scope

/*

const a = 10;
{
    const a = 100;
    console.log(a);
    {
        const a = 200;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
*/

// This works and output is 100 200 100 10

/*


const a = 10;
{
    const a = 100;
    console.log(a);
    {
        console.log(a); // This gives error here: Uncaught ReferenceError: Cannot access 'a' before initialization
        const a = 200;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

*/

/*

const a = 10;
{
    const a = 100;
    console.log(a);
    {
        console.log(a); // This works fine, because it follows lexical scope chaining
    }
    console.log(a);
}
console.log(a);

*/

// Output is: 100 100 100 10

// All rules followed inside normal functions work same on arrow functions as well
