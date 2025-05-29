/* Ques 1: Truncate the text

Write a function called truncate that checks the length of a given string str, and if it surpasses a specified maximum length, maxlength, it replaces the end of the string with the ellipsis character "..." so that the length matches the maximum length

Input: str = Subscribe to RoadsideCoder, maxlength = 9
Output: "Subscribe..."

*/


// Solution 1: Using Js String methods

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength ) + "...";
    }
    return str;    
}

let checkStr = "Subscribe to RoadsideCoder";
let maxlength = 9;
console.log(truncate(checkStr, maxlength));

/* For Solution 1:
Time Complexity: O(n)
Space Complexity: O(n)


⏱ Time Complexity:
	•	slice(0, maxlength) → O(n) where n = maxlength
	•	Concatenation with "..." → also O(1) or O(3) internally (negligible)
	•	So, Overall Time Complexity: O(n)

🧠 Space Complexity:
	•	Creates a new substring → O(n) for the sliced portion
	•	Final returned string is also new → O(n + 3) (practically still O(n))
*/




// Solution 2: Without Using Js String methods

function truncate2(str, maxlength) {
    if (str.length > maxlength) {

        let subStr = "";
        for (let i = 0; i< maxlength; i++) {
            subStr+= str[i];
        }
        str = subStr+ "..."
    }
    return str
}
let checkStr2 = "Subscribe to RoadsideCoder";
let maxlength2 = 9;
console.log(truncate2(checkStr2, maxlength2))

/* For Solution 2:

Time Complexity: O(n²)
Space Complexity: O(n)


⏱ Time Complexity:
	•	Loop runs for maxlength times → O(n)
	•	subStr += str[i] creates a new string each time (because strings are immutable) → causes repeated copying
	•	So, Effective Time Complexity: O(n²)

🧠 Space Complexity:
	•	subStr grows one character at a time → creates multiple intermediate strings
	•	So, Space Complexity: O(n), but with more overhead
*/



// Solution 3: Without Using Js String methods

function truncate3(str, maxlength) {
    if (str.length > maxlength) {
        let arr = []
        for (let i = 0; i< maxlength; i++) {
            arr.push(str[i]);
        }
        str = arr.join("")+ "..."
    }
    return str
}
let checkStr3 = "Subscribe to RoadsideCoder";
let maxlength3 = 9;
console.log(truncate3(checkStr3, maxlength3))

/* For Solution 3:

Time Complexity: O(n)
Space Complexity: O(n)


⏱ Time Complexity:
	•	Loop: O(n)
	•	.join(''): O(n)
	•	Total: O(n) ✅

🧠 Space Complexity:
	•	Temporary array of size maxlength: O(n)
*/