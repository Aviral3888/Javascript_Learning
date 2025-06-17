// Problem 1:
// Given an array, find the number of elements having 1 element greater than the element.

// Solution 1:
let arr_1 = [2, 3, 10, -1, 7, 3, 10, 2, 10];

function findElementsWithOneValueGreaterThenThem(arr) {
    let max = Number.MIN_VALUE;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxCount = 1;
        }
        else if (arr[i] == max) {
            maxCount++;
        }
    }
    console.log("Max:", max, "\nCount:", maxCount);

    return arr.length - maxCount;
}

// console.log(findElementsWithOneValueGreaterThenThem(arr_1));



// Problem 2: 
// Given an array of elements N, check if there exists a pair i, j such that arr[i] + arr[j] == k
// i != j
// To be done in No Extra space.

let arr_2 = [3, -2, 1, 4, 3, 6, 8];
let k_2 = 10;

function findSumPair(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log("i:", arr[i], "j:", arr[j])
            if ((arr[i] + arr[j]) == k) {
                return [arr[i], arr[j]];
            }
        }
    }
    return 0
}

console.log(findSumPair(arr_2, k_2));
