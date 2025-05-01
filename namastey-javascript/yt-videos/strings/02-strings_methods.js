console.log("Strings in Js - Methods");

let gameName = new String('PubG');


/* -------       length        ------- */
console.log(gameName.length);           // 4
console.log(gameName.__proto__);        // String object will all string methods 




/* -------       toLowerCase        ------- */
// makes complete string in lower case and does not update the original string

gameName = gameName.toLowerCase();
console.log(gameName);                  // pubg




/* -------       toUpperCase        ------- */
// makes complete string in upper case and does not update the original string

gameName = gameName.toUpperCase();
console.log(gameName);                  // PUBG




/* -------       charAt        ------- */
// using charAt we can check which character at present at which index

console.log(gameName.charAt(2));        // B
console.log(gameName.charAt(12));       // empty - since at index 12 nothing is present




/* -------       indexOf        ------- */
// check the character at index

console.log(gameName.indexOf('b'));     // -1 (since 'b' is not present)
console.log(gameName.indexOf('B'));     // 2 (B is present at 2nd index only)