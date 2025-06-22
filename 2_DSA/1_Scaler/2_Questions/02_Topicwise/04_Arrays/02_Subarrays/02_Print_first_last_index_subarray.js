// Problem 1: 
// Print starting and ending index of all subarrays where len = k;
// Solve

let arr_1 = [3, 4, 2, -1, 6, 7, 8];
let k = 3;

function printFirstAndLastIndexOfSubarray(arr, k) {
    let N = arr.length;
    let i = 0;
    while (i <= (N - k)) {
        console.log(i, i + (k - 1))
        i++;
    }
}

console.log(printFirstAndLastIndexOfSubarray(arr_1, k));