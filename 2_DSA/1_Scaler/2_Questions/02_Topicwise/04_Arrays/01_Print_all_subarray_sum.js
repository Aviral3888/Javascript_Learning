// Problem 1: 
// Print all subarray elements
// arr = [3, -2, 4, -1, 2, 6]

// Solution 1 :  Common Technique 
// Time Complexity -> O(N^3)

let arr_1 = [3, -2, 4, -1, 2, 6]

function printAllSubarraysSum1(arr) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            console.log(sum);
        }
    }
    return sum;
}

// console.log(printAllSubarraysSum1(arr_1));

// Solution 2 : Carry Forward Technique
// Time Complexity -> O(N^2) 

let arr_2 = [3, -2, 4, -1, 2, 6]

function printAllSubarraysSum2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum1 = 0;
        for (let j = i; j < arr.length; j++) {
            sum1 += arr[j]
            sum += sum1;
            console.log(sum1);
        }
        console.log("sum:", sum);
    }
    return sum;
}

console.log(printAllSubarraysSum2(arr_2));