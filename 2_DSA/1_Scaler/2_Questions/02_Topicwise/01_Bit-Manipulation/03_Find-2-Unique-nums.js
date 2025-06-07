/*
Single Number III

Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.

Example

Input 1:
A = [1, 2, 3, 1, 2, 4]
Output 1:
[3, 4]

Explanation 1:
3 and 4 appear only once.


Input 2:
A = [1, 2]
Output 2:
[1, 2]

Explanation 2:
1 and 2 appear only once.

*/

/*
Eg: [10, 8, 8, 9, 11, 6, 10, 17, 9, 6]

To be solve in _ steps

Step 1: Get the XOR result from this array 

Step 2: Find position of any set bit from the result

Step 3: Most Important and Tricky
        Get any set bit and separate the values based on that bit, one group of set bit values and another group of unset bit values.

*/

function checkBit(num, i) {
    return ((num & (1 << i)) !== 0)
}

function get2UniqueNums(arr) {
    let xorResult = 0;
    if (!arr.length) return [];

    for (let i = 0; i < arr.length; i++) {
        xorResult = xorResult ^ arr[i]
    };

    if (xorResult == 0) return [];

    let position = 0;
    for (let i = 0; i < 31; i++) {
        if (checkBit(xorResult, i)) {
            position = i;
            break;
        }
    }

    let set = 0, unset = 0;
    for (let i = 0; i < arr.length; i++) {
        if (checkBit(arr[i], position))
            set = set ^ arr[i]
        else
            unset = unset ^ arr[i]
    };
    return (set < unset) ? [set, unset] : [unset, set];
}

// console.log(get2UniqueNums([1, 2, 3, 1, 2, 4]));
console.log(get2UniqueNums([10, 8, 8, 9, 17, 6, 10, 11, 9, 6]));
