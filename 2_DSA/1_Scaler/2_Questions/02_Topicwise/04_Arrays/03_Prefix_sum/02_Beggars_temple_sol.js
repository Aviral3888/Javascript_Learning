/* Problem:
Given an arr[N] of 0 and Q queries, For Each query, you have L, R, x, for all index L to R add x. Print Final arr

arr[10] = [0,0,0,0,0,0,0,0,0,0]
*/

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let queries = [
    [2, 5, 3],
    [3, 7, 2],
    [1, 4, -4],
    [5, 8, 1],
    [6, 9, -3]
];

/*
            SOLUTION 1 : BRUTE FORCE
*/

function beggersTemple(arr, queries) {

    for (let [L, R, x] of queries) {
        for (let i = L; i<=R; i++) {
            arr[i] = arr[i] + x;
        }
    }

    return arr;
}

console.log(beggersTemple(arr, queries));