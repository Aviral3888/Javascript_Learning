console.log("24 - Map + Weakmap");

/*      -----------         MAP        ----------      */


// Maps in Javascript are same as Objects, Additionally we can use any type of keys and values.

// Creating a Map
const myMap = new Map();
console.log("Map:", myMap);

// Setting map values
let emptyStr = "str", emptyObject = { "a": "ab" }, emptyFunc = () => { }
myMap.set(emptyStr, "This is a plain string");
myMap.set(emptyObject, "This is a plain Object");
myMap.set(emptyFunc, "This is a empty arrow function");
console.log(myMap);

// Getting map values
// console.log(myMap.get(emptyStr));
// console.log(myMap.get(emptyObject));
// console.log(myMap.get(emptyFunc));

// Size of map
// console.log("Size is:", myMap.size); // 3

// Check if key exists in map
// console.log("Is emptyObject persent:", myMap.has(emptyObject)); // true
// console.log("Is emptyObjects persent:", myMap.has({ "a": "ab" })); // false 

/*
NOTE:

In JavaScript:
    •	Objects (and arrays, functions, etc.) are reference types.
    •	When you write { a: "ab" }, it creates a new object in memory every time.
    •	So even though the contents look the same, the memory references are different.
*/


// Delete key from map
myMap.delete(emptyObject);
// console.log(myMap);

// Clearing everything from a map
const myMap2 = new Map();
myMap2.set(1, "One");
myMap2.set(2, "Two");
// console.log("Map 2 before clearing map:", myMap2);

myMap2.clear();
// console.log("Map 2 after clearing the map:", myMap2);

// Important Finding
const myMap3 = new Map();
const john = { name: "John" };
myMap3.set(john, 123);
// console.log(myMap3.get(john)); // 123
// console.log(myMap3[john]); // undefined

/*
NOTE:
map[key] isn’t the right way to use a Map. Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (no object keys and so on). So we should use map methods.
*/

myMap.set(emptyObject, "This is a plain Object");
console.log(myMap);


/*      -----------         Iterating over a map        ----------      */

// 1. using for ... of
for (let [key, value] of myMap) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// 2. map.keys()
for (let key of myMap.keys()) {
    // console.log(`Key: ${key}`);
}

// 3. map.values()
for (let value of myMap.values()) {
    // console.log(`Value: ${value}`);
}

// 4. map.entries() -> same as 1.
for (let [key, value] of myMap.entries()) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// 5. using forEach -> same as 1. 
myMap.forEach((value, key) => {
    // console.log(`Key: ${key}, Value: ${value}`);
})



/*      -----------         Converting map to an array        ----------      */

// Converting complete map
const arr = Array.from(myMap);
// console.log("Array:", arr);

/*
OUTPUT:
[
    [
        "str",
        "This is a plain string"
    ],
    [
        () => {},
        "This is a empty arrow function"
    ],
    [
        {
            "a": "ab"
        },
        "This is a plain Object"
    ]
]
*/

// Conveting map keys into an array
const keysArr = Array.from(myMap.keys());
// console.log(keysArr);

// Conveting map values into an array
const valuesArr = Array.from(myMap.values());
// console.log(valuesArr);



/*      -----------         WEAKMAP        ----------      */

let wm = new WeakMap();
// console.log(wm); 
let nameObj = {"name": "Aviral"}
wm.set({}, "Empty Object");
wm.set(nameObj, "Named Object");
// console.log(wm);
// console.log(wm.get(nameObj)); // works fine
// console.log(wm.delete({})); // false
// console.log(wm.delete(nameObj)); // true

// console.log(wm.has(nameObj)) // true 