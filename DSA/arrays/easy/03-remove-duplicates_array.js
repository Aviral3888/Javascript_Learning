/*
Ques 3 - Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

*/

// in-place refers to : no new array can be created





/*          -------------       Using in built Js methods:      -------------         */
// SOLUTION: 1

// function removeDuplicates(arr) {            // Total : O(n^2)
//     for (let i=0; i<arr.length; i++) {      // O(n)

//         if(arr[i] == arr[i+1]) {
//             arr.splice(i, 1);               // O(n)
//             i--;
//         }
//     };
//     console.log(arr);
//     return arr.length;
// }

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// Time Complexity - O(n^2)
// Space Complexity - O(1)

/* Thinking
[1,1,2] same = i = 0 splice(i, 1) and push(_)
[1,2,_] different
return

[0,0,1,1,1,2,2,3,3,4] same, i=0, splice(i, 1) and push(_) i--, i++
[0,1,1,1,2,2,3,3,4,_] diff, i=0, i++
[0,1,1,1,2,2,3,3,4,_] same, i=1, splice(i,1) and push(_) i--, i++
[0,1,1,2,2,3,3,4,_,_] same, i=1, splice(i,1) and push(_) i--, i++
[0,1,2,2,3,3,4,_,_,_] diff

*/





/*          -------------       Without Js methods      -------------         */

/*

[0,0,1,1,1,2,2,3,3,4]

[0 1] > [0,0,1,1,1,2,2,3,3,4], i=0
[0 2] > [0,1,1,1,1,2,2,3,3,4], i=1
[1 3] > [0,1,1,1,1,2,2,3,3,4], i=1
[1 4] > [0,1,1,1,1,2,2,3,3,4], i=1
[1 5] > [0,1,2,1,1,2,2,3,3,4], i=2
[2 6] > [0,1,2,1,1,2,2,3,3,4], i=2
[2 7] > [0,1,2,3,1,2,2,3,3,4], i=3
[3 8] > [0,1,2,3,1,2,2,3,3,4], i=3
[3 9] > [0,1,2,3,4,2,2,3,3,4], i=4

return i+1;
*/

// SOLUTION: 3

function removeDuplicates(arr) {
    if (arr.length == 0) return 0;

    let i = 0;
    for (let j = 1; j< arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4]));

// Time Complexity - O(n)
// Space Complexity - O(1)




/*
SOLUTION: 2

This approach works -> but not efficient also doesn't update the array

function removeDuplicates(arr) {

    let i = 0;
    let unique = 1;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            unique++;
        }
        i++;
    }
    console.log(unique);
}

*/
/*

[0,0,1,1,1,2,2,3,3,4]

[0 1] -> 0, 0, Y, i = 0;
[0 2] -> 0, 1, N, i = 1;
[1 3] -> 0, 1, 
0 - 
*/

