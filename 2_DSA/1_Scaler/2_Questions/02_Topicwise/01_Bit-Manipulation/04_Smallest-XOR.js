/*
Q1.Smallest XOR
Problem Description
Given two integers A and B, find a number X such that A xor X is minimum possible, and the number of set bits in X equals B.

Problem Constraints
0 <= A <= 109
0 <= B <= 30

Input Format
First argument contains a single integer A.Second argument contains a single integer B.

Output Format
Return a single integer X.

Example Input
Input 1:
A = 3
B = 3
Input 2:
A = 15
B = 2

Example Output
Output 1:
7
Output 2:
12

Example Explanation
Explanation 1:
3 xor 7 = 4 which is minimum
Explanation 2:
15 xor 12 = 3 which is minimum
*/

// Solution 

/*
A = 10
1010

1<< i 
000001 << 3
001000
001010
=
001000 > 0 => Set Bit 



*/
function getSmallestXor(A, B) {

    let X = 0;

    // STEP 1: Set Bits in X matching A from MSB such that A ^ X is lowest. A can be equal to X as well. 
    // Start from MSB (must)
    for (let i = 30; i >= 0; i--) {
        if (B == 0) return X;

        if (((1 << i) & A) > 0) { // gives true when ith bit of A is set
            X = X | (1 << i)
            B--
        }
    }

    // Solution till here is fine only when Set bits in A is equal to or less than B if not Below solution also

    // STEP 2: Set remaining Bits in X from LSB such that A ^ X is still the least
    // Start from LSB (must)
    for (let i = 0; i <= 30; i++) {
        if (B == 0) return X;

        if (((1 << i) & X) == 0) { // gives true when ith bit of X is unset
            X = X | (1 << i);
            B--;
        }
    }

    return X;
}

console.log(getSmallestXor(10, 2));