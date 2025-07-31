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


let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let queries = [
    [1, 3],
    [2, 7],
    [4, 8],
    [0, 4],
    [7, 7]
];


/*
            SOLUTION 2 : PREFIX ARRAY SUM 
*/

/**/
function getQuerySum(arr, queries) {
    let PF = [arr[0]]; 
    for (let i = 1; i < arr.length; i++) {
        PF[i] = PF[i-1] + arr[i];
    }

    let ans = [];
    for (let [L, R] of queries) {
        let querySum = PF[R] - PF[L] + arr[L]; 
        ans.push(querySum);
    }

    return ans;
}

console.log(getQuerySum(arr, queries));




/*
            SOLUTION 1 : BRUTE FORCE
*/
/*
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
*/
