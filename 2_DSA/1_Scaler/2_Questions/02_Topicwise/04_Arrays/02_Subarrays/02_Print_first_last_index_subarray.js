// Problem 1: 
// Print starting and ending index of all subarrays where len = k;

// Solution 2 : Carry Forward Technique
// Time Complexity -> O(N^2) 

let arr_1 = [3, 4, 2, -1, 6, 7, 8, 9, 3, 2, -1, 4];
let k = 3;

function printFirstAndLastIndexOfSubarray(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j - i) == (k - 1)) {
                console.log(`[i - j]: [${i} - ${j}]`)
            }
        }
    }
}

console.log(printFirstAndLastIndexOfSubarray(arr_1, k));