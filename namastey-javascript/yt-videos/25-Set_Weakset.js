console.log("24 - Set + Weakset");

// Creating a set
const mySet = new Set();
console.log(mySet);

// Setting in a set
const myName = "Aviral", age = 24, add = (a, b) => a + b;
mySet.add(myName);
mySet.add(age)
mySet.add(age) // Duplicate entries are not allowed
mySet.add(true);
mySet.add(1);
mySet.add(add);
console.log("Set:", mySet);

// Can also be initialized using Set Constructor
const mySet2 = new Set([1, "name", false, {a: "1"}, ()=> {}]);
// console.log("Constructor set: ", mySet2);

// Size of Set
// console.log(mySet.size); // 5

// Check if key exists in map
// console.log("Is 1 present:", mySet.has(1)); // true
// console.log("Is 2 present:", mySet.has(2)); // false 

// Remove a value from Set
// mySet.delete(1);
// console.log(mySet);
// console.log("Is 1 present:", mySet.has(1)); // false

/*
NOTE - Invalid operation

mySet[3]= "3";
console.log("3", mySet);
*/


/*      -----------         Iterating over a Set        ----------      */

// 1. using for ... of loop
for (let item of mySet) {
    // console.log(`Item: ${item}`);
}

// 2. using forEach loop
mySet.forEach((item) => {
    // console.log(`Item: ${item}`)
})



/*      -----------         Remove duplicates from an array        ----------      */

let testArray = [1,2,3,4,1,2,99];
console.log(testArray); // (7) [1, 2, 3, 4, 1, 2, 99]
const testSet = new Set(testArray);
console.log(testSet); // Set(5) {1, 2, 3, 4, 99}
testArray = Array.from(testSet);
console.log(testArray); //(5) [1, 2, 3, 4, 99]