/*

Bit manipulation refers to the algorithmic techniques involving direct operations on bits of integers using bitwise operators. It plays a crucial role in optimizing both time and space complexities and is commonly tested in interviews at companies like Google, Meta, Amazon, etc.
It allows direct manipulation of bits using operators like AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>). In JavaScript, there’s also an unsigned right shift (>>>). These operations are extremely fast and offer solutions to a variety of problems such as toggling bits, checking for powers of two, and generating subsets.

Why Bit Manipulation?
	•	Efficient low-level processing.
	•	Optimizes for speed and memory.
	•	Useful in problems involving sets, flags, toggles, and binary representations.
	•	Ideal for space optimization, especially when using bitsets instead of boolean arrays.

Common Bitwise Operators
Operator		Symbol	Description			Example
AND			&		Sets bit if both bits are 1		a & b
OR			|		Sets bit if either bit is 1		a | b
XOR			^		Sets bit if only one bit is 1	a ^ b
NOT			~		Inverts all bits			~a
Left Shift		<<		Shifts bits left (multiply by 2)	a << 1
Right Shift		>>		Shifts bits right (divide by 2)	a >> 1
Unsigned Right Shift	>>>		(JavaScript only) Fills 0 on left	a >>> 1

Binary Representation Basics
	•	2ⁿ represents the bit set at position n.
	•	1 << i is equivalent to 2^i. This is widely used in masks and toggles.
	•	8-bit, 16-bit, 32-bit, and 64-bit representations follow:
	•	Example: 8-bit number = 00001111

Some of the most important use-cases include:
	•	Checking if a bit is set: (N & (1 << i)) != 0
	•	Setting a bit: N | (1 << i)
	•	Clearing a bit: N & ~(1 << i)
	•	Toggling a bit: N ^ (1 << i)
	•	Checking if a number is a power of two: (N & (N - 1)) == 0 && N > 0

To count the number of set bits in a number, use either:
	•	Naive approach: loop through each bit using right shifts and count
	•	Brian Kernighan’s algorithm: repeatedly turn off the rightmost set bit using N = N & (N - 1) until N becomes 0

Important Bitwise Tricks:
	•	1 << i is equivalent to 2^i and is used to create masks.
	•	XOR is often used to find a missing or unique number in an array.
	•	Bitmasks (numbers as sets) are used to represent subsets (common in DP problems).
	•	Using n & 1 helps check if a number is even or odd.

Signed vs Unsigned Shifts:
	•	In JavaScript and Java, right shifting a negative number using >> keeps the sign bit (arithmetic shift).
	•	Use >>> (unsigned shift) to shift right and fill with zeros.

Number Limits:
	•	JavaScript: Integers are safe up to 2^53 - 1 (use BigInt beyond that).
	•	Java: int is 32-bit, long is 64-bit.
	•	C++: int is usually 32-bit (platform dependent), long long is 64-bit.

Use-Cases Frequently Asked in Interviews:
	•	Generating all subsets of a set (using bitmask from 0 to 2^n - 1)
	•	Finding a unique number when others repeat twice or thrice (using XOR or custom bit count logic)
	•	Checking if two numbers differ by only one bit (used in Gray codes)
	•	Toggling, setting, clearing bits to represent flags/permissions

Examples and Practice Patterns:
	•	Count number of 1s in binary representation
	•	Reverse bits of a number
	•	Find the position of the first set bit from the right
	•	Swap two numbers without temp using XOR
	•	Isolate rightmost set bit: N & (-N)
	•	Clear rightmost set bit: N & (N - 1)

Bit-Level Memory Optimization:
	•	Representing boolean arrays as bitmasks
	•	Compressing state in DP using bitmasking (e.g., TSP, subset-sum variations)

Before interviews, it’s important to:
	•	Master fundamental patterns and tricks
	•	Practice problems that rely on bitwise masks and counting
	•	Understand how to debug bit-level operations

This topic is not just about knowing the operators but deeply understanding how bits behave across different data types and under various operations. When mastered, bit manipulation can drastically improve algorithmic efficiency.


*/