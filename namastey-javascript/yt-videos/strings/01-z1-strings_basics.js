console.log("Strings in Js");

/*

Strings are immutable - cannot be changed

*/


/* -------       Strings Initialization        ------- */

let name1 = "Amit";
let name2 = 'This is general String Literal';
let name3 = `This is
Template Literal 
Introduced in ES6
Can span over multiple lines.`

console.log(name1, "-> ", name2);
console.log(name3);

/*  -------         Difference between String Literals and Template Literals

| Feature                | String Literal (`'`, `"`)      | Template Literal (`` ` ``)         |
|------------------------|--------------------------------|------------------------------------|
| Syntax                 | `'Hello'`, `"Hello"`           | `` `Hello` ``                      |
| Multiline Support      | ❌ Use `\n` only                | ✅ Native multiline                |
| Expression Embedding   | ❌ Not supported                | ✅ `${expression}`                 |
| Easier to Read/Format  | ❌                              | ✅                                 |
| ES Version             | Available from start           | ES6 and newer                      |

*/

// Another way of initializing a String using String constructor
let newName = new String('Sample String');
// console.log(newName, typeof newName);                            // type is Object


// console.log`Hello ${'world'}, lets check template literal`;      // [ 'Hello ', ', lets check template literal' ] world


/* -------       Strings Concatenation        ------- */
// const repoCount = 50;
// console.log(name1 + repoCount);                                  // Old and not a good way to do this

// String Interpolation 
// console.log(`Name: ${name1}, and repoCount:${repoCount}`)        // Newer way of doing this.




let str = "Sample String"

/* -------       Strings - Looping over Strings         ------- */
// for(let i = 0; i< str.length; i++) {
    // console.log(str[i]);
// }


/* -------       Modifying Strings         ------- */
// str[2] = "M";                                                    // This doesnot update the strings.
// console.log(str);                                           
// console.log(str.replace('m', 'M'));                              // SaMple String
// console.log(str.replaceAll('S', 's'));                           // sample string





// -------- Conversion to String

// For Primitive Data Types

// console.log(String(1));                                          // '1'   
// console.log(String(true));                                       // 'true'
// console.log(String(undefined));                                  // 'undefiend'


// For Objects
// console.log(JSON.stringify({name: "Amit"}));                     // {"name":"Amit"} String
// console.log(JSON.parse('{"name":"Amit"}'));                     // { name: 'Amit' } Object