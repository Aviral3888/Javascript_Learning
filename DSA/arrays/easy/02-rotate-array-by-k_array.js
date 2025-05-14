/*
Ques 2 - Rotate Array by K
Given an integer array nums, rotate the array to the right by k steps,
where k is non - negative.

Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]
*/
/*
                Rotations
[1,2,3,4,5,6,7]
[7,1,2,3,4,5,6] 1
[6,7,1,2,3,4,5] 2
[5,6,7,1,2,3,4] 3
...             n
*/

// ----------------------------------------------------------------------------------------

// Solution 1: Does the work -> very inefficient approach

function rotateByK_1(arr, k) {
    let modifiedArr = [];
    for (let i = 0; i < k; i++) {
        let lastElement = arr[arr.length - 1];
        console.log(lastElement);
        (i == 0) ? modifiedArr.push(lastElement, ...arr) : modifiedArr.unshift(lastElement);
        modifiedArr.pop();
        console.log(modifiedArr);
        arr = modifiedArr;
    }
    return modifiedArr;
}
// console.log(rotateByK_1([1,2,3,4,5,6,7], 7))



// ----------------------------------------------------------------------------------------

// Solution 2: Using Js inbuilt methods - Efficient approach

function rotateByK_2(arr, k) {
    if (k == 0 || k == arr.length) {
        return arr;
    }
    let size = (k > arr.length) ? k % arr.length : k;
    return [...arr.slice(arr.length - size), ...arr.slice(0, arr.length - size)];
}

// console.log(rotateByK_2([-1, -100, 3, 99], 3));
// console.log(rotateByK_2([1,2,3,4,5,6,7], 6));

/*
📈 Time Complexity:
    •	.slice() runs in O(n), and you’re calling it twice → O(n)
    •	The spread operator [...a, ...b] also creates a new array of length n → O(n)
✅ So overall time complexity: O(n)
🧠 Space Complexity:
    •	You’re creating a new array of size n → O(n)
*/



// ----------------------------------------------------------------------------------------

// Solution 3: Without using Js inbuilt methods

function reverseArr(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
    return arr;
}

/*
[1,2,3,4,5,6,7], 0, 6
0, 6, true, temp = 1, [7, ... , 1]
1, 5, true, temp = 2, [7,6, ... , 2,1]
2, 4, true, temp = 3, [7,6,5,4,3,2,1]
3, 3, false
*/

function rotateByK_3(arr, k) {
    if (k >= arr.length) k = k % arr.length;
    console.log(k);
    if (k == 0) return arr;

    
    reverseArr(arr, 0, arr.length-1);           // O(n)
    reverseArr(arr, 0, k-1);                    // O(k)
    return reverseArr(arr, k, arr.length -1);   // O(n-k)
}

console.log(rotateByK_3([1,2,3,4,5,6,7], 3 ));

// Time Complexity - O(n)
// Space Complexity - O(1)

// [1,2,3,4,5,6,7] -> 3
// reverse - [7,6,5,4,3,2,1]
// break first k elements and reverse: [5,6,7,4,3,2,1]
// reverse the remaining elements:  [5,6,7,1,2,3,4]



