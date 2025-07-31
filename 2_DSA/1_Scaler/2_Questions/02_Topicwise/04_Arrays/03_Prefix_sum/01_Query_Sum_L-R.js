/* Problem:
Given an arr[N] and Q queries, For Each query, find the sum from L to R.

arr[10] = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1]
Q = 5;
1 - 3
2 - 7
4 - 8
0 - 4
7 - 7
*/


// Solution : BRUTE FORCE

let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let queries = [
    [1, 3],
    [2, 7],
    [4, 8],
    [0, 4],
    [7, 7]
];

function getQuerySum(arr, queries) {
    let querySum = [];

    for (let [L, R] of queries) {
        let sum = 0;
        for (let i = L; i<=R; i++) {
            sum += arr[i];
        }
        querySum.push(sum);
    }

    return querySum
}

console.log(getQuerySum(arr, queries));

