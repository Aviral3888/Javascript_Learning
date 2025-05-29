console.log("Methods in Array");

let foods = ["Potato", "Apple", "Carrot", "Melons"];
let values = [135, 43, 63, 457, 344, 132, 98];

console.log("initial:", foods, "\n:", values);




/* -------       Push        ------- */
// add at [end] and returns the updated length of array 

// Single Push
// console.log("Push returns length:", foods.push("Banana"));
// // Multiple items push
// foods.push("Chips", "Drinks", "Pizza");

// console.log("after push: ", foods);




/* -------        Pop        ------- */
// delete from end and returns the deleted item

// console.log(foods.pop()); // Pizza
// console.log("after pop:", foods);




/* -------        toString()        ------- */
// convert array into string

// console.log(foods.toString())                // Potato,Apple,Carrot,Melons,Banana,Chips,Drinks




/* -------        concat()        ------- */
// join multiple arrays and returns result but not modifies the original array

// let newfoods = ["Oil", "Fish"];
// console.log(foods.concat(newfoods));         // ['Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks', 'Oil', 'Fish']
// console.log(foods, newfoods);                // (7) ['Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks'] (2) ['Oil', 'Fish']
// let updatedFoods = foods.concat(newfoods);
// console.log(updatedFoods)                    // ['Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks', 'Oil', 'Fish']




/* -------        unshift()        ------- */
// similar to push() -> just adds in the start and returns the updated size of the array

// console.log(foods.unshift("Barfi")); // 8
// console.log("after unshift:", foods);        // (8) ['Barfi', 'Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks']




/* -------        shift()        ------- */
// similar to pop() -> just removes from the start and returns the deleted value from the array

// console.log(foods.shift());                     // Barfi
// console.log("after shift:", foods);          // (7) ['Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks']




/* -------        slice()        ------- */
// returns a piece of array, but doesnot change original array
// Array.slice(startIndex, endIndex)            // startIndex value is included, endIndex value is not included
// Array.slice(startIndex)                      // returns the array from startIndex till the end;

// console.log(foods.slice(1, 7));                 // (6) ['Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks']
// console.log(foods.slice(3));                    // (4) ['Melons', 'Banana', 'Chips', 'Drinks']
// console.log("after slice:", foods);          // No changes -> (7) ['Potato', 'Apple', 'Carrot', 'Melons', 'Banana', 'Chips', 'Drinks']




/* -------        splice()        ------- */
// change original array (add, remove, replace)
// Array.splice(startIndex, deleteCount, newElements); // newElements will be added at startIndex

// console.log("before splice:", values);          // (7) [135, 43, 63, 457, 344, 132, 98]
// console.log(values.splice(3, 2, 11, 12));       // (2) [457, 344]
// console.log("after splice:", values);           // (7) [135, 43, 63, 11, 12, 132, 98]

// // Add element - if only add element and not remove or replace:
// console.log(values.splice(2, 0, 7666));         // []
// console.log("after splice:",  values);          // (8) [135, 43, 7666, 63, 11, 12, 132, 98]

// // Delete element - if only delete
// console.log(values.splice(3, 1));               // [63]
// console.log("after splice:",  values);          // (7) [135, 43, 7666, 11, 12, 132, 98]

// // Replace element 
// console.log(values.splice(3, 1, 333));          // [11]
// console.log("after splice:",  values);          // (7) [135, 43, 7666, 333, 12, 132, 98]

// // If only startIndex is providec - it deletes all the index values after it
// console.log(values.splice(5));                  // (2) [132, 98]
// console.log("after splice:",  values);          // (5) [135, 43, 7666, 333, 12]

// If no parameter is passed in .splice() it will do nothing.




/* -------        flat()        ------- */
// flatten the array to the specified depth

// const array_1 = [1, 2, [2, 3, 4], 3, 4, [1, 2, [3, 5, [7, 8]], 6], 9];
// console.log(array_1.flat(Infinity));            //  [1, 2, 2, 3, 4, 3, 4, 1, 2, 3, 5, 7, 8, 6, 9]
// console.log(array_1.flat(1));                   //  [1, 2, 2, 3, 4, 3, 4, 1, 2, [3, 5, [7, 8]], 6, 9]
// console.log(array_1.flat(2));                   //  [1, 2, 2, 3, 4, 3, 4, 1, 2, 3, 5, [7, 8], 6, 9]




/* -------        Array.from()        ------- */
// converts the input parameter into an array.

// console.log(Array.from("112dnas"));             // ['1', '1', '2', 'd', 'n', 'a', 's']




/* -------        Array.of()        ------- */
// returns a new array with a set of elements:
let a = 100, b = 200, c = 300;
// console.log(Array.of(a, b, c));                 //  [100, 200, 300]




/* -------        Array.indexOf()        ------- */
const newArray = [1,2,3,4,5,4];
console.log(newArray.indexOf(3));               //  2
// console.log(newArray.indexOf(4));               //  3
// console.log(newArray.indexOf(9));               //  -1




/* -------        Array.lastIndexOf()        ------- */
// console.log(newArray.lastIndexOf(3));               //  2
// console.log(newArray.lastIndexOf(4));               //  5
// console.log(newArray.lastIndexOf(9));               //  -1




/* -------        Array.reverse()        ------- */
// simple reverse the array 
// console.log(newArray.reverse());               //  (6) [4, 5, 4, 3, 2, 1]

