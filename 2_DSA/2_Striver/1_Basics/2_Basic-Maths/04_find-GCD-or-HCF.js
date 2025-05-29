/*
Find GCD of two numbers

Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
The Greatest Common Divisor of any two integers is the largest number that divides both integers.

Example 1:
Input:N1 = 9, N2 = 12

Output:3
Explanation:Factors of 9: 1, 3 and 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.


Example 2:
Input:N1 = 20, N2 = 15

Output: 5
Explanation:Factors of 20: 1, 2, 4, 5
Factors of 15: 1, 3, 5
Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.

*/

// SOLUTION 1: WORKS but not optimal

function findGCD(num1, num2) {
    let factor_1 = [];
    counter1 = 0;
    for (let i = 1; i <= num1; i++) {
        if (num1 / i === Math.floor(num1 / i)) {
            factor_1.push(i)
            counter1++;
        }
    }
    counter2 = 0;
    let factor_2 = [];
    for (let i = 1; i <= num2; i++) {
        if (num2 / i === Math.floor(num2 / i)) {
            factor_2.push(i)
            counter2++;
        }
    }
    console.log(factor_1, factor_2, counter1, counter2);

    if (counter1 > counter2) {
        max = factor_1;
        min = factor_2;
    }
    else {
        max = factor_2;
        min = factor_1;
    }


    console.log(max, min)
    for (let i = min.length - 1; i >= 0; i--) {
        for (let j = max.length - 1; j >= 0; j--) {
            if (max[i] == min[j]) {
                return max[i];
            }
        }
    }
}
// console.log(findGCD(9, 99));



// SOLUTION 2: Efficient Approach

/*
Step by step:

Loop from MIN (num1, num2) till 1, 
The number whose remainder with both is 0 is the solution
*/

function findGCD_2(num1, num2) {
    let gcd = 0;
    for (let i = Math.min(num1, num2); i >= 1; i--) {
        console.log(i);
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
            break;
        }
    };
    return gcd;
}

// console.log(findGCD_2(9, 12));

/*
Easy solution - 
Time Complexity O(n)
*/ 



// BUT this can further be reduced using Euclidean Algorithm

function findGCD_Euclidean(a, b){
    while (a > 0 && b > 0) {
        if (a > b) a = a % b
        else b = b % a
    }
    if (a == 0) return b;
    else return a;
}

console.log(findGCD_Euclidean(9, 12));

// T.C = O(log (min(m, n)))
