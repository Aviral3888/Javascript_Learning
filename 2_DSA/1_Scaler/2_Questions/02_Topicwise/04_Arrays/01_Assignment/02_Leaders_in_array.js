/*
Q5.Leaders in an array

Problem Description
Given an integer array A containing N distinct integers, you have to find all the leaders in array A.An element is a leader if it is strictly greater than all the elements to its right side.
    
NOTE: The rightmost element is always a leader.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 108

Input Format
There is a single input argument which a integer array A

Output Format
Return an integer array denoting all the leader elements of the array.

Example Input
Input 1:
A = [16, 17, 4, 3, 5, 2]
Input 2:
A = [5, 4]

Example Output
Output 1:
[17, 2, 5]
Output 2:
[5, 4]
*/

// Solution 

// let A = [16, 17, 4, 3, 5, 2];
let A = [5, 4];

function findLeaderInArray(arr) {
    let leaderArr = [];
    let max = Number.MIN_VALUE;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == arr.length) {
            leaderArr.push(A[i])
            max = A[i]
        }
        else {
            if (A[i] > max) {
                leaderArr.push(A[i]);
                max = A[i];
            }
        }
    }
    return leaderArr;
}

console.log(findLeaderInArray(A))