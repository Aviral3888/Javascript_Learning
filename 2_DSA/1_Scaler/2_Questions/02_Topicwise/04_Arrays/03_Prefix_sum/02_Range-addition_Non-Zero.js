/* Problem:
Given an arr[N] of 0 and Q queries, For Each query, you have L, R, x, for all index L to R add x. Print Final arr

arr[10] = [0,0,0,0,0,0,0,0,0,0]
*/

let arr = [4, 2, 1, 3, 6];
let queries = [
    [1, 3, 2],
    [2, 4, -1],
    [0, 2, 1]
];

/*
            SOLUTION : OPTIMIZED - PREFIX SUM USING ANOTHER ARRAY
*/


function rangeAddition(arr, queries) {
    let N = arr.length;

    // Step 1: Initialize a new Array with all 0 elements.    
    let ans = Array(N).fill(0);
    // arr = [4,2,1,3,6]
    // ans = [0,0,0,0,0]

    // Step 2: With the 0 array create the Prefixes and implement Prefix Sum approach
    for (let [L, R, x] of queries) {
        ans[L] = ans[L] + x;
        if (R < N - 1) {
            ans[R + 1] = ans[R + 1] - x;
        }
    }
    console.log(ans); // [1, 2, -1, -1, -2]

    for (let i = 1; i < arr.length; i++) {
        ans[i] = ans[i] + ans[i - 1];
    }
    console.log(ans); // [1, 3, 2, 1, -1]

    for (let i = 0; i < arr.length; i++) {
        ans[i] = ans[i] + arr[i];
    }

    return ans; // [5, 5, 3, 4, 5]
}

console.log(rangeAddition(arr, queries));
