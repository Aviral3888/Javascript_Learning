/*
Problem Description

Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

function findUnique(A) {
    let num = 0;
    for (let i = 0; i <= A.length - 1; i++) {
        num = num ^ A[i];
    }
    return num;
}