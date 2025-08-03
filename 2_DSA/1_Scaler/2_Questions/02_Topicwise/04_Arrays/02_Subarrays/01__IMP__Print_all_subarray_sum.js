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

// console.log(printAllSubarraysSum2(arr_2));



// Solution 3: Contribution of every element technique
/*
This approach mixes with the concept of 
How many subarrays will contain ith element.

*/

let arr_3 = [3, -2, 4, -1, 2, 6]

function printAllSubarraysSum3(arr) {
    let sum = 0;
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        let total_occurance = (i + 1) * (N - i);
        let each_element_contribution = arr[i] * total_occurance;
        sum += each_element_contribution;
    }

    return sum;
}

console.log(printAllSubarraysSum3(arr_3))



// SOLUTION 4: Using BIGINT 

module.exports = { 
 //param A : array of integers
 //return a long integers
	subarraySum : function(A){
        
        let ans = BigInt(0);
        for (let i = 0; i< A.length; i++) {
            let val = BigInt(A[i]);
            let left = BigInt(i+1);
            let right = BigInt(A.length - i);
            ans = ans + (val * left * right);
        }
        
        return ans;
	}
};