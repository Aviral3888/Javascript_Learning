/*
Q4. Equilibrium index of an array

Problem Description

You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105

Input Format
First arugment is an array A .

Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:
A = [1, 2, 3]

Example Output
Output 1:
3
Output 2:
-1


Example Explanation
Explanation 1:
i   Sum of elements at lower indexes    Sum of elements at higher indexes
0                   0                                   7
1                  -7                                   6
2                  -6                                   1
3                  -1                                  -1
4                   1                                   3
5                  -3                                   0
6                   0                                   0

3 is an equilibrium index, because: 
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

Explanation 2:
i   Sum of elements at lower indexes    Sum of elements at higher indexes
0                   0                                   5
1                   1                                   3
2                   3                                   0
Thus, there is no such index.
*/

// let A = [1, 2, 3];
// let A = [-7, 1, 5, 2, -4, 3, 0];

// function getEquilibrium(A) {
//     let totalSum = 0;
//     for (let i = 0; i < A.length; i++) {
//         totalSum += A[i]
//     };

//     let leftSum = 0;
//     let rightSum = 0;

//     for (let i = 0; i < A.length; i++) {
//         if (i != 0) {
//             leftSum += A[i-1];
//         }
//         rightSum = totalSum - leftSum - A[i];

//         if (leftSum === rightSum) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(getEquilibrium(A));





// SOLUTION - AGAIN 

let A = [-7, 1, 5, 2, -4, 3, 0];
function getEquilibriumIndex(arr) {

    let N = arr.length;
    let equilibriumIndexCount = 0;

    // STEP 1: Calculate Total sum
    let totalSum = 0;
    for (let i = 0; i < N; i++) {
        totalSum += arr[i];
    }

    // STEP 2: GET Left sum and Right Sum 
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < N; i++) {

        // Get Left Sum using Carry Forward Technique 
        leftSum += arr[i];

        // Get Right Sum from Left Sum 
        rightSum = totalSum + arr[i] - leftSum;
        /*
        LOGIC:
        at any Index i
        Left Sum = [0, i-1]
        Right Sum = [i+1, N-1]
        Total Sum = arr[0, N-1]

        [0, N-1] = [0, i-1] + [i+1, N-1] + arr[i]
        Adding arr[i] on both sides
        [0, N-1] + arr[i] = [0, i-1] + [i+1, N-1] + arr[i] + arr[i]
        [0, N-1] + arr[i] = [0, i-1] + arr[i] + [i+1, N-1] + arr[i]
        [0, N-1] + arr[i] = [0, i] + [i, N-1]
        TS + arr[i] = LS + RS
        => RS = TS + arr[i] - LS
        */

        if (leftSum === rightSum) {
            equilibriumIndexCount++;
        }
    }
    
    return equilibriumIndexCount;
}

console.log(getEquilibriumIndex(A));