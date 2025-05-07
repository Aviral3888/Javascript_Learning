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
    
}

console.log(findSecondMaxUsingSet([12, 35, 1, 10, 34, 1]));
