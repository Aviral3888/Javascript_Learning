/* 
Ques 3 : Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1

*/


function getHammingDistance(num1, num2) {

    let num1Binary = num1.toString(2);
    let num2Binary = num2.toString(2);

    let maxLength = Math.max(num1Binary.length, num2Binary.length);

    num1Binary = num1Binary.padStart(maxLength, 0);
    num2Binary = num2Binary.padStart(maxLength, 0);

    let distance = 0;
    for (let i = 0; i < num1Binary.length; i++) {
        if (num1Binary[i] !== num2Binary[i])
            distance++
    }
    return distance;
}

console.log(getHammingDistance(1577962638, 1727613287))


/*

Time Complexity: O(log n)
Space Complexity: O(1)

Time Complexity:
    1.	num1.toString(2) and num2.toString(2) →
Converts numbers to binary strings.
    •	Each operation is O(log n) where n is the number’s value (since the number of bits = log₂(n)).
    2.	Math.max(num1Binary.length, num2Binary.length) →
Just compares two integers: O(1)
    3.	padStart(...) for both strings →
Pads to the length of the longer binary string, which is at most O(log n) characters long → O(log n)
    4.	The for loop →
Loops over the padded binary strings, which have length ≈ log n → O(log n)


Space Complexity:
	1.	num1Binary and num2Binary store binary strings → O(log n) each
	2.	No additional large data structures; just scalar variables and a few strings


*/