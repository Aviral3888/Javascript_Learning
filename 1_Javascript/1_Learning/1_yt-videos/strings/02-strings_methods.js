console.log("Strings in Js - Methods");

let gameName = new String('PubG');
let str = "Sample String";

/* -------       length        ------- */
// console.log(gameName.length);           // 4
// console.log(gameName.__proto__);        // String object will all string methods 




/* -------       concat        ------- */
// console.log(str.concat("! Concatenated Once", "!! And again"));   // Sample String! Concatenated Once!! And again




/* -------       toLowerCase        ------- */
// makes complete string in lower case and does not update the original string

// gameName = gameName.toLowerCase();
// console.log(gameName);                  // pubg




/* -------       toUpperCase        ------- */
// makes complete string in upper case and does not update the original string

// gameName = gameName.toUpperCase();
// console.log(gameName);                  // PUBG




/* -------       charAt        ------- */
// using charAt we can check which character at present at which index

// console.log(gameName.charAt(2));        // B
// console.log(gameName.charAt(12));       // empty - since at index 12 nothing is present




/* -------       indexOf        ------- */
// check the character at index

// console.log(gameName.indexOf('b'));     // -1 (since 'b' is not present)
// console.log(gameName.indexOf('B'));     // 2 (B is present at 2nd index only)



let sportsName = new String("Foot-ball");
console.log(sportsName);

/* -------       substring()        ------- */
// Returns the substring at the specified location within a String object.
// substring(startIndex, endIndex) -> startIndex is included but endIndex is excluded.
// if endIndex is not provided -> it returns the sub string from startIndex till the end
// we can give -ve values in index but, substring will not obey and will consider to begin from 0 index.

// console.log(sportsName.substring(0, 4));    // Foot 
// console.log(sportsName.substring(3));       // t-ball




/* -------       slice()        ------- */

// slice(start, end) the original string from startIndex to endIndex (start - included && end - not included)
// if endIndex is not provided -> it returns the sub string from startIndex till the end
// IMP: it takes -ve index as well and in that case, starts from last

// console.log(sportsName.slice(2), sportsName);    // ot, String {'Foot-ball'}
// console.log(sportsName.slice(-6, 8));            // t-bal




/* -------       trim()        ------- */
// removes spaces from start and end of string 
// other methods include [trimStart, trimEnd]

const spaceString = new String("    first    second   ");
console.log(spaceString);                       //     first    second   
console.log(spaceString.trim());                // first    second




/* -------       replace() & replaceAll()      ------- */
// (method) String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)
// Replaces text in a string, using a regular expression or search string.

// replace -> replaces first instance of that char or word
// replaceAll -> replaces all instances of that char or word

console.log(sportsName.replace('-', '_'));      // Foot_ball (earlier was Foot-ball)
console.log(sportsName.replaceAll('o', 'O'));      // FOOt-ball (earlier was Foot-ball)






/* -------       includes()        ------- */
console.log(sportsName.includes("b"));      // true
console.log(sportsName.includes("z"));      // false




/* -------       split()        ------- */
let splitName1 = "one-two-three-four";
// console.log(splitName1.split('-'));         // ['one', 'two', 'three', 'four']




/* -------       padStart and padEnd()        ------- */
// console.log("5".padStart(3, "0"));           // "005"
// console.log("5".padStart(3, "1"));           // "115"

// console.log("5".padEnd(3, "0"));             // "500"
// console.log("5".padEnd(4, "a"));             // "5aaa"




/* -------       repeat()        ------- */
// console.log("string".repeat(4));             // stringstringstringstring