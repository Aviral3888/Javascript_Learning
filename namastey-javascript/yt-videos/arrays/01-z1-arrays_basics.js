console.log("Arrays in javscript");

let marks = [97, 32, 45, 64, 98];
let students = ["Amit", "Sachin", "Mohit"];

console.log(marks);

// length
console.log(marks.length);

// type of -> object
console.log(typeof marks);

// Indices of Array
console.log(marks[0], marks[1], marks[10]); // 97 32 undefined
marks[2] = 33;
marks[7] = 10;
console.log(marks); // [97, 32, 33, 64, 98, empty × 2, 10]
delete marks[7] // doesn't remove the element, rather creates an empty position 
console.log(marks); // [97, 32, 33, 64, 98, empty × 3]

// looping over Array

let heightInCms = [165, 176, 198, 189, 177];

// For loop
// for (let i = 0; i <= heightInCms.length; i++) {
//     console.log(heightInCms[i]);
// }

// For - of loop
// for (let item of heightInCms) {
//     console.log(item);
// }

// For - in loop
// for (let item of heightInCms) {
//     console.log(item);
// }