/*
Ques 4 - Given an integer array nums, find the subarray with the largest sum,
and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]
*/


/*      ----------      ----------      Kadanes Algorithm : YT Solution      ----------      ----------      */

function maximumSumArray(arr) {
    let currSum = 0;
    let maxSum = -Infinity;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if(maxSum < currSum) {
            maxSum = Math.max(currSum, maxSum);
            endIndex = i;
        }
        if(currSum < 0) {
            currSum = 0;
            startIndex = i+1 
        }
    }
    console.log(maxSum);
    console.log(startIndex, endIndex);
}



console.log(maximumSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, -8]))




/*      ----------      ----------      Brute Force Approach : YT Solution      ----------      ----------      */
// Solution WORKS - But NOT efficient    T.C - O(n^2)    ||     S.C - O(1)

// Folow up question is to also get the subArray: -> Using 2 Indexes
/*
function maximumSumArray(arr) {
    let maxSum = arr[0];
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum
                startIndex = i;
                endIndex = j;
            }
        }
    };

    return {
        "sum": maxSum,
        "subArray": arr.splice(startIndex, endIndex - startIndex)
    };
}

console.log(maximumSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
*/




/*      ----------      ----------      Brute Force Approach : Self Solution      ----------      ----------      */
// Solution WORKS - But NOT efficient T.C - O(n^2) || S.C - 

/*
Approach
[5, 4, -1, 7, 8]
[5, 9, 8, 15, 23] -> Max (23)
[23]
[4, -1, 7, 8]
[4, 3, 10, 18] -> Max (18)
[23, 18]
[-1, 7, 8]
[-1, 6, 14] -> Max (14)
[23, 18, 14]
[7, 8]
[7, 15] -> Max (15)
[23, 18, 14, 15]
[8] -> Max(8)
[23, 18, 14, 15, 8] -> max (23) Answer
*/

/*
function maximumSumArray(arr) {
    let oneIterationMax = [];
    let oneIterationSum = [];

    for (let i = 0; i<arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
           if (j == i) {
               oneIterationSum.push(arr[j])
           }
           else {
               oneIterationSum.push(oneIterationSum[oneIterationSum.length -1] + arr[j]);
           }
       }
       oneIterationMax.push(Math.max(...oneIterationSum))
       oneIterationSum = [];
    }
    console.log(oneIterationMax, Math.max(...oneIterationMax));
    return Math.max(...oneIterationMax)
}
console.log(maximumSumArray([5, 4, -1, 7, 8]))
*/

// The above approach works but is very inefficient


