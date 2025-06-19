// Problem 1: 
// Print all subarray elements

let arr_1 = [3, -2, 6, 2, 4];

function printAllSubarrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr_1.length; i++) {
        for (let j = i; j < arr_1.length; j++) {

            // print all subarray elements
            // for (let k = i; k<=j; k++) {
            //     console.log(arr[k]);
            // }

            // print sum of all subarray elements
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
        }
    }

    console.log("SUM:", sum);
}

// console.log(printAllSubarrays(arr_1));


// Problem 2:
// Given an array of N elements, and a, b reverse the subarray from a - b

/*
Eg: Input arr = [1,2,3,4,5,6,7], a = 2, b = 5;
Output = [1,2,6,5,4,3,7]
*/

let arr_2 = [1, 2, 3, 4, 5, 6, 7], a = 2, b = 5;
function reverseSubArray(arr, a, b) {
    let start = a;
    let end = b;

    while(start < end) {
        arr[start] = arr[start] ^ arr[end];
        arr[end] = arr[start] ^ arr[end];
        arr[start] = arr[start] ^ arr[end];
        start++;
        end--;
    }
    return arr;
}
console.log(reverseSubArray(arr_2, a, b))