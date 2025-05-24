/*

Print all Divisors of a given Number
Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

Example 1:
Input:N = 36
               
Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
        
Example 2:
Input:N =12

Output: [1, 2, 3, 4, 6, 12]

Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.    

*/


// Solution 1: Works but not optimised. 

// Time Complexity - O(n)

function printDivisor(num) {
    let divisor = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisor.push(i);
        }
    };
    return divisor;
}

// console.log(printDivisor(36));






// Solution 2: Optimised and Efficient
// Time Complexity: O(sqrt(n)) + sort() time complexity


function printDivisorSqrt(num) {
    let divisor = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            divisor.push(i);
            if (i !== num / i) divisor.push(num / i);
        }
    }
    return divisor.sort((a, b) => a - b);
}

console.log(printDivisorSqrt(36))
