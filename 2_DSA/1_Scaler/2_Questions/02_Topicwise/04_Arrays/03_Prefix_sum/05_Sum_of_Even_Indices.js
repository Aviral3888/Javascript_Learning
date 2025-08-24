// Given an array of size N, and queries L, R, find the sum of all even indices from L to R.

let arr = [6, -2, 3, 4, 10, 5, 19, 2, 3, 2];
let queries = [[3, 7], [2, 8], [1, 5]];

function sumOfEvenIndices(arr, queries) {

    // Step 1: is to generate the Prefix Sum with even indices only
    let prefixSumEven = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            prefixSumEven[i] = prefixSumEven[i - 1] + arr[i]
        }
        else {
            prefixSumEven[i] = prefixSumEven[i - 1]
        }
    };

    // Step 2: Using PF array find sum of all query and return in array.
    let ans = [];
    for (let [L, R] of queries) {
        let result = 0;
        if (L != 0) {
            result = prefixSumEven[R] - prefixSumEven[L - 1]
        }
        else {
            result = prefixSumEven[R]
        }

        ans.push(result);
    }

    return ans;
}

// console.log(sumOfEvenIndices(arr, queries));

 
// for odd Also:
// arr = [6, -2, 3, 4, 10, 5, 19, 2, 3, 2];
//       [0,  1,  2, 3, 4, 5, 6, 7, 8,  9] 
// pfOdd [0, -2, -2, 2, 2, 7, 7, 9, 9, 11]
function sumOfOddIndices(arr, queries) {

    // Step 1: is to generate the Prefix Sum with even indices only
    let prefixSumOdd = [];

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 1) {
            prefixSumOdd[i] = prefixSumOdd[i - 1] + arr[i]
        }
        else {
            prefixSumOdd[i] = prefixSumOdd[i - 1]
        }
    };

    // Step 2: Using PF array find sum of all query and return in array.
    let ans = [];
    for (let [L, R] of queries) {
        let result = 0;
        if (L != 0) {
            result = prefixSumOdd[R] - prefixSumOdd[L - 1]
        }
        else {
            result = prefixSumOdd[R]
        }

        ans.push(result);
    }

    return ans;
}

console.log(sumOfOddIndices(arr, queries));
