/* Ques 2: Palindrome Number

An integer is a palindrome when it reads the same forward and backward

Input: x = 121 , Output: true
Input: x = 123 , Output: false

*/


// Solution 1: Without Using Js String methods

function checkPalindrome(str) {

    let start = 0;
    let end = str.length - 1;
    for (let i = 0; i <= str.length / 2; i++) {

        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
}

// console.log(checkPalindrome("12321"));


/*
12321

start = 0     end = 4   1   1 => true
start = 1     end = 3   2   2 => true
start = 2     end = 2   3   3 => true

*/

/* For Solution 1:

Time Complexity: O(n)
Space Complexity: O(1)


⏱ Time Complexity:
	•	The loop runs only half the length of the string → n / 2
	•	Comparisons are constant-time (O(1) per iteration)

🔸 Total Time Complexity: O(n) (where n is the length of the string)

🧠 Space Complexity:
	•	Creates a new substring → O(n) for the sliced portion
	•	Final returned string is also new → O(n + 3) (practically still O(n))
*/






// Solution 2: Using Js String methods

function checkPalindrome(str) {

    let reverseStr = str.split("").reverse().join("");

    if (str == reverseStr){
        return true;
    }
    return false;
}

console.log(checkPalindrome("12321"));


/* For Solution 1:

Time Complexity: O(n)
Space Complexity: O(n)


⏱ Time Complexity:
	1.	split("") → O(n)
	2.	reverse() → O(n)
	3.	join("") → O(n)

➡️ Total Time Complexity = O(n)

💾 Space Complexity:
	•	You’re creating a new array and a new string (from join), each of size n.

➡️ Space Complexity = O(n)
*/