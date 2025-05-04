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

console.log(checkPalindrome("12321"));


/*
12321

start = 0     end = 4   1   1 => true
start = 1     end = 3   2   2 => true
start = 2     end = 2   3   3 => true

*/