
// Problem 1:
// Given an array, find the number of elements having 1 element greater than the element.

/*

let arr_1 = [2, 3, 10, -1, 7, 3, 10, 2, 10];

function findElementsWithOneValueGreaterThenThem(arr) {
    let max = -Infinity;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxCount = 0;
        }
        if (arr[i] == max) {
            maxCount++;
        }
    }

    return arr.length - maxCount;
}

console.log(findElementsWithOneValueGreaterThenThem(arr_1));

*/



// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------



// Problem 3: 
// Given an array of elements N, reverse it with no extra space.

/*
let arr_3 = [3, -1, 6, 4, 2, 5, 7]

function swapNum(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function revereseArray(arr) {
    let j = arr.length - 1;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        swapNum(arr, i, j);
        j--;
    }
    return arr;
}

console.log(revereseArray(arr_3));
*/



// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------


// Problem 1: 
// Print all subarray elements

let arr_1 = [3, -2, 6, 2, 4];
function printAllSubarrays(arr) {}