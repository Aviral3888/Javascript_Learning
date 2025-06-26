// LEETCODE Question - https://leetcode.com/problems/number-of-good-pairs/ - Little Similar

/*
Problem Description
Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.

Problem Constraints
1 <= A.size() <= 104
1 <= A[i] <= 109
1 <= B <= 109

Input Format
First argument is an integer array A.
Second argument is an integer B.

Output Format
Return 1 if good pair exist otherwise return 0.

Example Input
Input 1:
A = [1,2,3,4]
B = 7
Input 2:
A = [1,2,4]
B = 4
Input 3:
A = [1,2,2]
B = 4

Example Output
Output 1:
1
Output 2:
0
Output 3:
1

Example Explanation
Explanation 1:
(i,j) = (3,4)

Explanation 2:
No pair has sum equal to 4.

Explanation 3:
(i,j) = (2,3) 

*/



let A = [1, 2, 3, 4]
let B = 7



// Solution 1 - working but not optimised
// TC - O(N^2)

function findGoodPair_1(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 1; j < A.length; j++) {
            if (i == j) continue;
            if (A[i] + A[j] == B) {
                console.log(A[i], A[j]);
                return 1
            }
        }
    }
    return 0
}

// console.log(findGoodPair_1(A, B))




// Solution 2 - Two Pointer Approach
// will only work if array is sorted. 

// IF sorted array - T.C = O(N), 
// IF not sorted array - T.C. = O(N logN) (Because first sorting will be done in O(n logn ) time)

function findGoodPair_2(A, B) {

    let i = 0;
    let j = A.length - 1;

    while (i < j) {
        let sum = A[i] + A[j];

        if (sum == B) {
            console.log(A[i], A[j]);
            return 1;
        }

        else if (sum > B) {
            j--;
        }
        else if (sum < B) {
            i++;
        }
    }
    return 0;
}

// console.log(findGoodPair_2(A, B))



// Solution 3 - Using Object is Js

// T.C = O(N) but S.C also O(N);

// let A = [1, 2, 3, 4]
// let B = 7

function findGoodPair_3(A, B) {

    let map = {};
    for (let i = 0; i < A.length; i++) {
        let req = B - A[i];
        if (map[req]) { return 1 }
        map[A[i]] = 1;
    }
    return 0;
}

// console.log(findGoodPair_3([2, 2], 4))
// console.log(findGoodPair_3([1, 2, 3, 4], B))




// Solution 4 - Using Map() is Js


function findGoodPair_4(A, B) {

    let map = new Map();

    for (let i = 0; i < A.length; i++) {
        let req = B - A[i];
        if (map.has(req)) { return 1 }
        map.set(A[i], 1);
    }
    return 0;
}

console.log(findGoodPair_4([1, 2, 3, 4], 7))