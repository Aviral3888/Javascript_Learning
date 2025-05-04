/* 
Ques 3 : Hamming Distance

Given two strings x and y, return the Hamming distance between them.

Input: x = "hello", y = "hwllr"
Output: 2
Explanation:
  (hello)
  (hwllr)
    ↑  ↑

Explaination by chat GPT:

The Hamming distance between two strings (or binary numbers) of equal length is the number of positions at which the corresponding symbols are different.

Note:
	•	Both strings must be of equal length.
	•	It does not apply if lengths are different (unless one is padded explicitly).

*/


function getHammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        return "Both strings are of different length, Hamming Distance cannot be calculated"
    }

    let count = 0;
    for (let i = 0; i< str1.length; i++) {
        if (str1[i] !== str2[i]) count++
    }
    return count
}

console.log(getHammingDistance("hello", 'hwllr'))


/*

Time Complexity: O(n)
Space Complexity: O(1)

Time Complexity:
	•	The loop runs for n times where n = str1.length.
	•	Each character comparison is O(1).
	•	Total Time Complexity: O(n)

Space Complexity:
	•	No extra space is used beyond a few variables.
	•	Total Space Complexity: O(1)

*/