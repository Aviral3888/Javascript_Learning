
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
//                          REVERSE ARRAY 
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


// Problem 3: 
// Print all subarray elements
/*
let arr_1 = [3, -2, 6, 2, 4];
function printAllSubarrays(arr) {
    let N = arr.length;

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            console.log(`[${i}-${j}]`)
            for (let k = i; k <= j; k++) {
                console.log(arr[k]);
            }
        }
    }
}

console.log(printAllSubarrays(arr_1))
*/


// ----------------------------------------------------------------------------------------------------
//                          PRINT ALL SUBARRAY
// ----------------------------------------------------------------------------------------------------


// Problem 4: 
// Print all subarray elements
/*
let arr_1 = [3, -2, 6, 4, 2];
function printAllSubarraysSum(arr) {
    let N = arr.length;
    let sumOfSubarrays = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            console.log(`[${i}-${j}]`)
            let sumOfAllSubarrays = 0;
            for (let k = i; k <= j; k++) {
                // console.log(arr[k]);
                sumOfSubarrays += arr[k];
                sumOfAllSubarrays += arr[k];
            }
            console.log("Sum of all Subarrays:", sumOfAllSubarrays)
        }
    }
    console.log("Sum of Subarrays:", sumOfSubarrays);
}

console.log(printAllSubarraysSum(arr_1))
*/



// ----------------------------------------------------------------------------------------------------
//                          REVERSE SUBARRAY
// ----------------------------------------------------------------------------------------------------


// Problem 5:
// Given an array of N elements, and a, b reverse the subarray from a - b

/*
Eg: Input arr = [1,2,3,4,5,6,7], a = 2, b = 5;
Output = [1,2,6,5,4,3,7]
*/
/*
let arr_2 = [1, 2, 3, 4, 5, 6, 7], a = 2, b = 5;

function reverseSubArray(arr, a, b) {
    while(a < b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        a++;
        b--;
    }
    return arr;
}

console.log(reverseSubArray(arr_2, a, b))
*/



// ----------------------------------------------------------------------------------------------------
//                          GOOD PAIR  ||  2 SUM
// ----------------------------------------------------------------------------------------------------

// Problem 6:
// Good Pair or 2 Sum
// Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.



/*
let A = [1, 2, 3, 4, -2, 3, 40, 20, 1]
let B = 38

function checkGoodPair(arr, k) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            else if (arr[i] + arr[j] == k) {
                indices = [arr[i], arr[j]];
            }
        }
    }
    return (indices.length > 0) ? indices : false
}

console.log(checkGoodPair(A, B));
*/

/* 
let A = [5, 11, 17, 8, 2]
let B = 19

function getGoodPair(arr, k) {
    let map = new Map();
    let indices = [];
    for (let i = 0; i< arr.length; i++) {
        let req = k - arr[i];
        if (map.has(req)) {
            indices = [map.get(req), i];
            break;
        }
        else {
            map.set(arr[i], i);
            console.log(map);
        }
    }
    return (indices.length > 0) ? indices : false;
}

console.log(getGoodPair(A, B))
*/


// ----------------------------------------------------------------------------------------------------
//                          ROTATE AN ARRAY BY K
// ----------------------------------------------------------------------------------------------------

// Problem 7:
// Rotate an array by K elements:

let arr = [3, -2, 1, 4, 6, 9, 8];
let k = 3;

// ans = [6, 9, 8, 3, -2, 1, 4]

function reverse(arr, start, end) {
    while (start < end) {
        arr[start] = arr[start] ^ arr[end];
        arr[end] = arr[start] ^ arr[end];
        arr[start] = arr[start] ^ arr[end];
        start++;
        end--;
    }
}

function rotateByK(arr, k) {
    let N = arr.length;
    if (arr.length < 2) { return arr };

    reverse(arr, 0, N - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, N - 1);
    return arr;
}

console.log(rotateByK(arr, k));


// Time Complexity - O(n)
// Space Complexity - O(1)

// steps:
// [1,2,3,4,5,6,7] -> 3
// reverse - [7,6,5,4,3,2,1]
// break first k elements and reverse: [5,6,7,4,3,2,1]
// reverse the remaining elements:  [5,6,7,1,2,3,4]
