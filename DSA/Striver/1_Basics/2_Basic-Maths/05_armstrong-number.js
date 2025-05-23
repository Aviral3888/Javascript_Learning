/*
Check if a number is Armstrong Number or not

Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

Example 1:
Input:N = 153
               
Output:True

Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
        
Example 2:
Input:N = 371

Output: True

Explanation: 3^3+5^3+1^3 = 27 + 343 + 1 = 371

9474
Number of digits: 4
9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474  
*/


function checkArmstrong(num) {
    let num1 = num;
    let count = (num !== 0) ? Math.floor(Math.log10(num) + 1) : 1;
    let result = 0;
    while (num != 0) {
        let ld = num % 10;
        result = result + (ld ** count);
        num = Math.floor(num / 10);
    };

    return (result == num1) ? true : false;
}

console.log(checkArmstrong(0));