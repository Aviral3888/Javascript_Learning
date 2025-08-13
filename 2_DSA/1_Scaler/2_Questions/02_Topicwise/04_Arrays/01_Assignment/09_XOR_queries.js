/*
Q1. Xor queries

Problem Description
You are given an array A (containing only 0 and 1) as element of N length.
Given L and R, you need to determine value of XOR of all elements from L to R (both inclusive) and number of unset bits (0's) in the given range of the array.

Problem Constraints
1<=N,Q<=100000
1<=L<=R<=N

Input Format
First argument contains the array of size N containing 0 and 1 only. 
Second argument contains a 2D array with Q rows and 2 columns, each row represent a query with 2 columns representing L and R.

Output Format
Return an 2D array of Q rows and 2 columns i.e the xor value and number of unset bits in that range respectively for each query.

Example Input
A=[1,0,0,0,1]
B=[ [2,4],
    [1,5],
    [3,5] ]

Example Output
[[0 3]
[0 3]
[1 2]]

Example Explanation
In the given case the bit sequence is of length 5 and the sequence is 1 0 0 0 1. 
For query 1 the range is (2,4), and the answer is (array[2] xor array[3] xor array[4]) = 0, and number of zeroes are 3, so output is 0 3. 
Similarly for other queries.
*/



// ----------- SOLUTION 1: BRUTE FORCE ----------
/*

let A = [1, 0, 0, 0, 1]
B = [[2, 4],
[1, 5],
[3, 5]]


function xorQueries(A, B) {

    let ans = [];

    for (let [L, R] of B) {
        let xor = 0;
        let unsetBitCount = 0;
        for (let i = L; i <= R; i++) {
            xor = xor ^ A[i-1];
            if (A[i-1] == 0) {
                unsetBitCount++
            }
        }
        ans.push([xor, unsetBitCount])
    }
    return ans;
}

console.log(xorQueries(A, B));
*/


// ----------- SOLUTION 2: OPTIMISED : PREFIX ARRAY ----------

let A = [1, 0, 0, 0, 1]
B = [[2, 4],
[1, 5],
[3, 5]]

function xorQueries(A, B) {
    let prefixXORArr = [];
    let unsetBitArr = [];

    prefixXORArr[0] = A[0];
    unsetBitArr[0] = (A[0] == 0) ? 1 : 0;

    for (let i = 1; i < A.length; i++) {
        prefixXORArr[i] = prefixXORArr[i - 1] ^ A[i];
        unsetBitArr[i] = (A[i] == 0) ? unsetBitArr[i - 1] + 1 : unsetBitArr[i - 1]
    }

    let ans = [];
    for (let [L, R] of B) {
        let xor = 0;
        let unsetBitCount = 0;

        xor = (L !== 1) ? prefixXORArr[R - 1] ^ prefixXORArr[L - 2] :  prefixXORArr[R - 1];
        unsetBitCount = (L !== 1) ? unsetBitArr[R - 1] - unsetBitArr[L - 2] : unsetBitArr[R - 1];

        ans.push([xor, unsetBitCount]);
    }

    return ans;
}

console.log(xorQueries(A, B));