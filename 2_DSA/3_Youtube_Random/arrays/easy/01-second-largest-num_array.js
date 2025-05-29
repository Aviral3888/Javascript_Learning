/*
Ques 1 - Second Largest Number
Given an array Arr of size N, print second largest
distinct element from an array.

Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
Input: [10, 5, 10]             ----->>>>>  Output: 5
*/


// Solution 1 - Using Array
// Brute Force Solution 

function findSecondMaxUsingArr(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let max = sortedArr[0];
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== max) { return sortedArr[i] };
    }
}

// console.log(findSecondMaxUsingArr([12, 35, 1, 10, 34, 1]));


// Solution 2 - Using Set

function findSecondMaxUsingSet(arr) {
    let set = new Set(arr);
    return [...set].sort((a, b) => b - a)[1] || 0;
}

// console.log(findSecondMaxUsingSet([1,1, -1]));



// Solution 3 - Using Array : Optimized Solution

function findSecondMaxLinear(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

console.log(findSecondMaxLinear([12, 35, 1, 10, 34, 1, 35, 34, 35, -1, Infinity]));

/*
⏱ Time Complexity:
    •	O(n) — single iteration over the array.

🧠 Space Complexity:
    •	O(1) — uses constant extra space (max, secondMax).
*/

/*
12, 35, 1, 10
max secondMax
-I  -I
12  -I
35   12
35   34

*/