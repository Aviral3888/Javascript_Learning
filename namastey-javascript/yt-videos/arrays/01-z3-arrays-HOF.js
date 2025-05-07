console.log("Js - Arrays - HOF");

/*       ---------------        Array.prototype.map()         --------------       */

/*

// Eg: 1 Performing Operation on each array element

let arr = [10, 3, 26, 45, 456, 345, 45];

let newArr = arr.map(val => val * val);
console.log("Updated Array:", newArr);      // [100, 9, 676, 2025, 207936, 119025, 2025]
console.log("Original Aray:", arr);         // [10, 3, 26, 45, 456, 345, 45]


// Eg: 2 Extracting names from Objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const userNames = users.map(user => user.name);
console.log("User Names:", userNames);      // ['Alice', 'Bob']


// Eg: 3 Can also be used as [].map(element, index, originalArr){}

let arr1 = [10, 3, 26, 45, 6, 15];
let obj1 = {}
const newArr1 = arr1.map((element, index, arr) => {
    console.log("Val:", element, "Index: ", index, "Prev arr:", arr );
    obj1[index] = element;
    return element + 5;
})
console.log(newArr1);                       // [15, 8, 31, 50, 11, 20]
console.log("Obj:", obj1);                  // { "0": 10, "1": 3, "2": 26, "3": 45, "4": 6, "5": 15 }

*/




/*       ---------------        Array.prototype.filter()         --------------       */

/*

// Eg: 1 Filter even values:

let arr1 = [12, 31, 62, 35, 53, 75, 8, 0];
let filteredArr = arr1.filter( (val) => {
    return val % 2 == 0
});
console.log("Filtered Arr:", filteredArr);   // [12, 62, 8, 0]

*/




/*       ---------------        Array.prototype.reduce()         --------------       */

/*
// Eg: 1 Sum of numbers in an array:

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue = 0;
let sum = arr1.reduce((accumulator, currentValue, index, arr) => {
    return accumulator = accumulator + currentValue;
}, initialValue)
console.log(sum);                           // 55


// Eg: 2 Finding Maximum

let arr2 = [12, 31, 62, 35, 53, 75, 8, 0];

const maxVal = arr2.reduce((acc, curr, index, arr) => {
    // console.log(index, curr, acc);
    return Math.max(acc, curr);
}, 0);
console.log(maxVal);                        // 75


// Eg: 3 Flatten a nested array;

const nested = [[1, 2], [3, 4], [5]];
const flattenArr = nested.reduce((acc, curr, index, arr) => {
    console.log(index, "Curr:", curr, "Acc:", acc); 
    return acc.concat(curr);
}, []);
console.log("Flatten:", flattenArr);

*/





/*       ---------------        Array.prototype.some()         --------------       */

/*
// Eg: 1 Check if any number is divisible by 2 and 5 both

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valid = arr1.some((val, index, arr) => {
    return (val % 2 === 0 && val % 5 === 0);
});
console.log("Valid:", valid);
*/





/*       ---------------        Array.prototype.every()         --------------       */

/*
// Eg: 1 Return every number divisible by 2 or 5 

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr1.every((val, index, arr) => {
    return (val % 2 == 0 || val % 5 == 0 || val > 0)
});
console.log("Valid:", newArr);

*/




/*       ---------------        Array.prototype.fill()         --------------       */
// let arr3 = [1,2,4,5,6,8];
// arr3.fill(0);                                  //  [0, 0, 0, 0, 0, 0]
// arr3.fill(0, 2);                               //  [1, 2, 0, 0, 0, 0]
// arr3.fill(0, 2, 4);                            //  [1, 2, 0, 0, 6, 8]
// console.log(arr3);




/*       ---------------        Array.prototype.reverse()         --------------       */
// let arr4 = [1,2,3,4,5,6,7,8,9];
// console.log(arr4);
// arr4.reverse();
// console.log(arr4);