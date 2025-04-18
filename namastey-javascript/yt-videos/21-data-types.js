console.log("21- Data types in js");

/*
-----------------------------       GFG - https://www.geeksforgeeks.org/javascript-data-types/       ---------------------------------
*/

/*


JavaScript Data Types

In JavaScript, each value has a data type, defining its nature (e.g., Number, String, Boolean) and operations. Data types are categorized into Primitive (e.g., String, Number) and Non-Primitive (e.g., Objects, Arrays).

Primitive Data Type

1. Number
The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.

let n1 = 2;
console.log(n1)
let n2 = 1.3;
console.log(n2)
let n3 = Infinity;
console.log(n3)
let n4 = 'something here too' / 2;
console.log(n4)

Output
2
1.3
Infinity
NaN


2. String
A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript, which are.

let s1 = "Hello There";
console.log(s1); 
let s2 = 'Single quotes work fine';
console.log(s2); 
let s3 = `can embed ${s1}`;
console.log(s3); 

Output
Hello There
Single quotes work fine
can embed Hello There
There’s no difference between ‘single’ and “double” quotes in JavaScript. Backticks provide extra functionality as with their help of them we can embed variables inside them.


3. Boolean
The boolean type has only two values i.e. true and false.

let b1 = true;
console.log(b1);  
let b2 = false;
console.log(b2);  

Output
true
false


4. Null
The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value.
let age = null;
console.log(age)

Output
null
The ‘null’ data type defines a special value that represents nothing, or empty value.


5. Undefined

A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.

let a;
console.log(a);

Output
undefined


6. Symbol (Introduced in ES6)
Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.

let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);
  
Output
false


7. BigInt (Introduced in ES2020)
BigInt is a built-in object that provides a way to represent whole numbers greater than 253. The largest number that JavaScript can reliably represent with the Number primitive is 253, which is represented by the MAX_SAFE_INTEGER constant.

let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);


// -----------------------------------------


Non-Primitive Data Types

The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.


1. Object
JavaScript objects are key-value pairs used to store data, created with {} or the new keyword. They are fundamental as nearly everything in JavaScript is an object.

let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

Output
Company


2. Arrays
An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.

let a1 = [1, 2, 3, 4, 5];
console.log(a1);
let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

Output
[ 1, 2, 3, 4, 5 ]
[ 1, 'two', { name: 'Object' }, [ 3, 4, 5 ] ]


3. Function
A function in JavaScript is a block of reusable code designed to perform a specific task when called.

// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));

Output
Hello, Ajay!


4. Date Object
The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.

// Creating a new Date object for the current date and time
let currentDate = new Date();
// Displaying the current date and time
console.log(currentDate); 

Output
2025-03-08T06:23:33.202Z


5. Regular Expression
A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.
// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); // Returns true because "Hello" matches the pattern
console.log(result); 

Output
false


// ------------------------------------


Interesting Facts about Data Types

1. Dynamically Typed : JavaScript Variables are not bound to a specific data type. Mainly data type is stored with value (not with variable name) and is decided & checked at run time.

let x = 42;   
console.log(x)
x = "hello";  
console.log(x)
x = [1, 2, 3]
console.log(x)
Output
42
hello
[ 1, 2, 3 ]


2. Everything is an Object (Sort of): In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.

let s = "hello";
console.log(s.length);  
// Example with a number
let x = 42;
console.log(x.toString()); 
// Example with a boolean
let y = true;
console.log(y.toString());
// Internal Working of primitives to be treeated as objects
// Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

// The wrapper is discarded after use
temp = null; 

Output
// 5
// 42
// true


3. NaN is not equal to itself: NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.

console.log(typeof NaN);
console.log(NaN === NaN);
5/z Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.

Output
number
false


4. A Symbol is Never Equal to Another One : Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are 
never equal to any other Symbol.

let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);

Output
false


5. Undefined and Null: undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.


6. Integers are Floating are Numbers only. There is only one type number that covers both integers and floating point numbers.

let x = 42;     // Integer
let y = 42.5;   // Floating-point

console.log(typeof x); 
console.log(typeof y);

*/

/*

// Symbols in Javascript

Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.

let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);


💡 Why Use Symbols?
	1.	To create truly unique keys in objects
	2.	To avoid property name collisions
	3.	To define constants or internal object behavior (e.g., iterators)


🧬 Symbols Are Unique
const a = Symbol("key");
const b = Symbol("key");
console.log(a === b); // false — each symbol is unique


🔍 Built-in Symbols
JavaScript includes some well-known symbols that customize object behavior:


⚠️ Symbols are not enumerable

📌 TL;DR
Concept	Description
Symbol	A primitive, unique, and immutable value
Usage	Unique object keys, hidden properties, meta-programming
Not Enumerable	Not shown in for...in, Object.keys(), etc.
Built-in Uses	Symbol.iterator, Symbol.toStringTag, etc.

*/