/*
Count digits in a number

Example 1:
Input:N = 12345
               
Output:5

Explanation:  The number 12345 has 5 digits.
        
Example 2:
Input:N = 7789

Output: 4

Explanation: The number 7789 has 4 digits.      
*/

function countDigits(num) {
    let counter = 0;
    while (num > 1) {
        counter++;
        num /= 10;
    }
    return counter;
}

let num = 123576567
console.log(countDigits(num));