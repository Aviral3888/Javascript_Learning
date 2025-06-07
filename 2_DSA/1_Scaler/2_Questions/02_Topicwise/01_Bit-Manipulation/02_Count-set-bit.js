/*
Given a number N and an integer i find the number of set bits in N.

Eg: 
N = 21

O/P = 3
Explanation:

21 in bit is 00010101, as 3 bits are Set / 1.
*/



// Solution 3: Using Bit Manipulation 

function countSetBit3(num) {
    let count = 0;
    while (num > 0) {
        if (num & 1) count++
        num = num >> 1;
    }
    return count;
}

console.log(countSetBit3(31));


// For BIG Numbers  i.e. greater than 2**31 -1 use BigInt

// function countSetBit3(num) {
//     num = BigInt(num);
//     let count = 0n;
//     while (num > 0n) {
//         if (num & 1n) count++

//         num = num >> 1n;
//     }
//     return count;
// }

// console.log(countSetBit3(358576567567581n));

// Solution 2: Using Bit Manipulation 

function checkBit(num, i) {
    return ((num & (1 << i)) !== 0)
}

function countSetBit2(num) {
    let count = 0;
    while (num > 0) {
        if (checkBit(num, 0)) count ++
        num = num >> 1;
    };
    return count;
}
// This works fine but can be used without checkBit also
// console.log(countSetBit2(32));





// Solution 1: using toString(2)

function countSetBit1(num) {
    let count = 0;
    num.toString(2).split("").forEach(e => {
        if (e == "1") count++
    });
    return count;
}

// console.log(countSetBit1(31));
