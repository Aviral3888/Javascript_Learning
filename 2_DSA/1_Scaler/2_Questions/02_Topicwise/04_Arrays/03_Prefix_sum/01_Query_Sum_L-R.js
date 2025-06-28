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


// Solution :

let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let queries = [
    [1, 3],
    [2, 7],
    [4, 8],
    [0, 4],
    [7, 7]
];

function getSum_L_R(arr, queries) {
    let PF = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        PF[i] = sum;
    }

    let sumArray = [];
    for (let [L, R] of queries) {
        let querySum = PF[R] - PF[L] + arr[L]
        sumArray.push(querySum)
    }
    return sumArray;
}

console.log(getSum_L_R(arr, queries))


// PREFIX SUM technique is used here