/* 
Problem Description

You are given T(number of test cases) integer arrays.For each array A, you have to find the value of absolute difference between the counts of even and odd elements in the array.

Problem Constraints
1 <= T <= 10
1 <= | A | <= 105
1 <= A[i] <= 109

Input Format
First line contains a single integer T.
Each of the next T lines begin with an integer denoting the length of the array A(| A |), followed by | A | integers which indicate the elements in the array.

Output Format
For each test case, print an integer in a separate line.

Example Input
Input 1:
1
4 1 2 3 4 

Input 2:
2
4 2 3 5 1
1 4

Example Output
Output 1:
0 
Output 2:
2
1

*/


function getEvenOddDifference(n) {
    let even = 0, odd = 0;
    n.trim().split(" ").map(Number).forEach((num) => {
        console.log(num, "> ", num & 1);
        if ((num & 1) === 0) {
            even += 1
        }
        else { odd += 1 }
        console.log(even, odd);
    });

    return Math.abs(even - odd);
}

console.log(getEvenOddDifference("4 2 3 5 1"))

// Not a full-fledged solution, but a part of it.
