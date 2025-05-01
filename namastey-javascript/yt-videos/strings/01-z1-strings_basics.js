console.log("Strings in Js");


// Initializing a String

let name = "Amit";
const repoCount = 50;

// Adding / Concatenating strings
console.log(name + repoCount); // Old and not a good way to do this

// String Interpolation 
console.log(`Name: ${name}, and repoCount:${repoCount}`) // Newer way of doing this.


// Another way of initializing a String using String constructor

let newName = new String('Jatin');
console.log(newName, typeof newName); // type is Object

