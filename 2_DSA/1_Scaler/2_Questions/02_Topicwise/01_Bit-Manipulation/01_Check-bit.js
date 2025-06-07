/*
Given a number N and an integer i find the ith bit of N is set (1) or unset (2).

Eg: 
N = 21
i = 2

O/P = Set or 1 
Explanation:

21 in bit is 00010101, at 2nd bit that 3rd position from Right value is 1 which is set.
*/

// Solution 3 - Using Bit Manipulation Left Shift

function checkBitUsingLeftShift(num, i) {
    if ((num & (1 << i)) !== 0)
        return "Set"
    else
        return "Unset"
}

console.log(checkBitUsingLeftShift(21, 2));


// Solution 2 - using Bit Manipulation Right Shift

function checkBitUsingRightShift(num, i) {
    num = num >> i;
    if ((num & 1) == 1) {
        return "Set"
    }
    else {
        return "Unset"
    }
}
// console.log(checkBitUsingRightShift(21, 3));

// Solution 1- using toString(2)

function checkBit1(num, i) {
    let numBit = num.toString(2).split('');
    console.log(numBit);

    if (numBit[i] == 1) {
        return "Set"
    }
    else {
        return "Unset"
    }
}

// console.log(checkBit1(21, 2))