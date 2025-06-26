/*
Q8.Noble Integer
Problem Description
Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.

Problem Constraints
1 <= | A | <= 2 * 105
- 108 <= A[i] <= 108

Input Format
First and only argument is an integer array A.

Output Format
Return 1 if any such integer p is present else, return -1.

Example Input
Input 1:
A = [3, 2, 1, 3]
Input 2:
A = [1, 1, 3, 3]

Example Output
Output 1:
1
Output 2:
-1

Example Explanation
Explanation 1:
For integer 2, there are 2 greater elements in the array..
Explanation 2:
There exist no integer satisfying the required conditions.
*/


// let A = [1, 1, 3, 3];
let A = [-2,8,8,6,-2,3,-2,-7,3,3,-2,0,4,-3,-4,-2,-1,-10,-4,-2,7,-1,0,-7,3,-7,7,3,2,-4,-5,2,6,5,-2,7,-1,6,-10,4,-9,-10,-6,-2,-3,0,-2,6,-8,4,7,9,-7,9,-8,-2,-7,-10,-9,-3,8,9,1,5,4,9,2,5,-3,-6,-1,-1,-6]

function nobleInteger(arr) {
    let N = arr.length;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
        if (arr[i] !== arr[i + 1] || arr[i] != 0) {
            if (arr[i] == (N - 1) - i) {
                console.log(arr[i]);
                return 1
            }
        }
    }
    return -1
}

console.log(nobleInteger(A))