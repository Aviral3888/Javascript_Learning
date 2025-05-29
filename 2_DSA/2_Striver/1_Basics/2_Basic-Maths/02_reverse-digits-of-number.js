/*
Reverse Digits of A Number

Problem Statement: Given an integer N return the reverse of the given number.
Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

Example 1:
Input:N = 12345
               
Output:54321

Explanation: The reverse of 12345 is 54321.
        
Example 2:
Input:N = 7789

Output: 9877

Explanation: The reverse of number 7789 is 9877.
*/

var reverse = function (x) {
    let reverseNum = 0;
    let sign = (x < 0) ? -1 : 1;
    x = Math.abs(x);
    while (x != 0) {
        let lastDigit = x % 10;
        x = Math.floor(x / 10);
        reverseNum = (reverseNum * 10) + lastDigit;
    }
    console.log(reverseNum);
    let exp = (2 ** 31) - 1;
    console.log(exp);
    if ((reverseNum > 2 ** 31 - 1) || reverseNum < -(2 ** 31)) {
        return 0;
    }
    // if (reverseNum < -(2 ** 31) || reverseNum > 2 ** 31 - 1) return 0;
    reverseNum *= sign;
    return reverseNum;
};

let num = -2147483648
console.log(reverse(num));
