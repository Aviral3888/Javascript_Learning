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


function rotateByK_3(arr, k) {
    let size = arr.length;
    if (size < k) {
        k = k % size
    }
}

console.log(rotateByK_3([1, 2, 3, 4, 5, 6, 7], 1));


// [1,2,3,4,5,6,7] -> k


