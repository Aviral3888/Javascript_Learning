/*
Q3.Closest MinMax

Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.

Problem Constraints
1 <= | A | <= 2000

Input Format
First and only argument is vector A

Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array

Example Input
Input 1:
A = [1, 3, 2]
Input 2:
A = [2, 6, 1, 6, 9]

Example Output
Output 1:
2
Output 2:
3

Example Explanation
Explanation 1:
Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:
Take the last 3 elements of the array.
*/



// SOLUTION SELF: 

// var A = [2, 6, 1, 6, 9];

// let A = [834, 563, 606, 221, 165];

// function closestMinMax(A) {
//     if ([1, 2].includes(A.length)) return 1;
//     let min = Infinity;
//     let max = -Infinity;
//     for (let i = 0; i < A.length; i++) {
//         min = Math.min(min, A[i]);
//         max = Math.max(max, A[i]);
//     }
//     console.log("Min:", min, "Max:", max);

//     if (min == max) { return 1 };

//     let count = 0;
//     let ans = A.length;
//     let set = "none";

//     for (let i = 0; i < A.length; i++) {
//         if (A[i] == min) {

//             if (set == "none") {
//                 count++;
//                 set = "min"
//             }
//             else if (set == "min") {
//                 count = 1;
//             }
//             else {
//                 count++;
//                 ans = Math.min(ans, count);
//                 count = 1;
//                 set = "min";
//             }
//         }
//         else if (A[i] == max) {
//             if (set == "none") {
//                 count++;
//                 set = "max"
//             }
//             else if (set == "max") {
//                 count = 1;
//             }
//             else {
//                 count++;
//                 ans = Math.min(ans, count);
//                 count = 1;
//                 set = "max";
//             }
//         }
//         else {
//             if (set != "none") { count++ };
//         }
//         console.log(i, A[i], "Set:", set, "Count:", count, "Ans:", ans);
//     }
//     return ans;
// }

// console.log(closestMinMax(A));




// ---------- SOLUTION 2 - Brute Force

let A = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];

function getClosestMinMax(A) {

    let N = A.length;

    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < N; i++) {
        min = Math.min(min, A[i]);
        max = Math.max(max, A[i]);
    }
    
    let ans = N - 1;
    for (let i = 0; i < N; i++) {
        if (A[i] == min) {
            for (let j = i + 1; j < N; j++) {
                if (A[j] == max) {
                    console.log(i, j)
                    ans = Math.min(ans, (j - i + 1));
                }
            }
        }
        else if (A[i] == max) {
            for (let j = i + 1; j < N; j++) {
                if (A[j] == min) {
                    console.log(i, j)
                    ans = Math.min(ans, (j - i + 1));
                }
            }
        }
    }
    return ans;
}

console.log(getClosestMinMax(A));