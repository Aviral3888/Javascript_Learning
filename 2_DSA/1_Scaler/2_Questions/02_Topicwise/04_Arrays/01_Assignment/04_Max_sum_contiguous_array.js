/*
Q6.Max Sum Contiguous Subarray

Problem Description
Given an array A of length N, your task is to find the maximum possible sum of any non - empty contiguous subarray.
In other words, among all possible subarrays of A, determine the one that yields the highest sum and return that sum.

Problem Constraints
1 <= N <= 106
- 1000 <= A[i] <= 1000

Input Format
The first and the only argument contains an integer array, A.

Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.

Example Input
Input 1:
A = [1, 2, 3, 4, -10] 
Input 2:
A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

Example Output
Output 1:
10 
Output 2:
6 

Example Explanation
Explanation 1:
The subarray[1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:
The subarray[4, -1, 2, 1] has the maximum possible sum of 6. 
*/


// let A = [-500][0, -1, -2, 5, -3, 2, 2]
let A = [0, -1, -2, 5, -3, 2, 2]

// let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


function maxSumArray(A) {
    let max = -Infinity;
    let sum = 0;
    let minNeg = -Infinity;
    let allNeg = true;

    for (let i = 0; i < A.length; i++) {
        if (sum + A[i] < 0) {
            sum = 0;
        }
        else {
            sum = sum + A[i];
        }
        max = Math.max(sum, max)

        if (A[i] < 0) minNeg = Math.max(minNeg, A[i])
        else allNeg = false 
    }
    return allNeg ? minNeg : max
}

console.log(maxSumArray(A));


