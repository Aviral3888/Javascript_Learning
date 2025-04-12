console.log("15 - map use cases");

// [].map() is used to transform an array;

const arr = [5, 1, 3, 6, 2];
console.log(arr);

// Eg: 

// Double:
const double = function (num) { return num * 2 };
console.log(arr.map(double));

// Triple
const triple = function (num) { return num * 3 };
console.log(arr.map(triple));

// Binary
// const binary = function (num) { return num.toString(2) };
// console.log(arr.map(binary));
// ||

console.log(arr.map(num => num.toString(2)));
 