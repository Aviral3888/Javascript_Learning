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
            SOLUTION 2 : OPTIMIZED - PREFIX SUM
*/
/**/
function beggersTemple(arr, queries) {

    for (let [L, R, x] of queries) {
        arr[L] = arr[L] + x;
        if (R < arr.length - 1) {
            arr[R + 1] = arr[R + 1] - x;
        }
    }
    // console.log(arr); // [0, -4, 3, 2, 0, 5, -6, 0, -2, -1]

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1];
    }
    // console.log(arr); // [0, -4, -1, 1, 1, 6, 0, 0, -2, -3]

    return arr;
}

console.log(beggersTemple(arr, queries));



/*
            SOLUTION 1 : BRUTE FORCE
*/
/*
function beggersTemple(arr, queries) {

    for (let [L, R, x] of queries) {
        for (let i = L; i<=R; i++) {
            arr[i] = arr[i] + x;
        }
    }

    return arr;
}

console.log(beggersTemple(arr, queries));
*/