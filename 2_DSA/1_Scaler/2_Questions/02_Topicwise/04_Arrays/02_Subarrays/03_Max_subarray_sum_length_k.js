// Find Max subarray sum with length = k

// Brute Force Approach

let arr_1 = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let k_1 = 4;

function getMaxSubarraySumForK_1(arr, k) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j <= i + (k - 1); j++) {
            sum += arr[j];
        }
        if (sum > max) max = sum
    }
    return max;
}

// console.log(getMaxSubarraySumForK_1(arr_1, k_1))



// OPTIMIZE APPROACH - SLIDING WINDOW

let arr_2 = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let k_2 = 4;

/*
1st = [-3, 4, -2, 5] sum = 4
2nd = [4, -2, 5, 3] sum = 10
3rd = [-2, 5, 3, -2] sum = 4
...
*/

function getMaxSubarraySumForK_2(arr, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    let max = sum;
    // sum = 4
    for (let i = 1; i <= arr.length - k; i++) {
        sum = sum - arr[i - 1] + arr[i + (k - 1)]
        if (sum > max) { max = sum }
    }

    return max;
}

console.log(getMaxSubarraySumForK_2(arr_2, k_2))