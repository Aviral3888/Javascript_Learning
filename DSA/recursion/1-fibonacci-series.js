/*
Ques 4 - Fibonacci Number

Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1

Input: n = 3  ----->>>>>  Output: 2

*/


// Solution 1: Using array 

function fibonacciArr(num) {
    if ([0, 1].includes(num)) return num;

    const arr = [0, 1];
    for (i=2; i<=num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[num]
}

// console.log(fibonacciArr(3))

/*
⏱ Time and Space Complexity:
	•	Time Complexity: O(n) — one loop from 2 to num.
	•	Space Complexity: O(n) — because of the array storing all Fibonacci values.
*/



// Solution 2: Using 2 variable approach

function fibonacci(num) {
    if ([0, 1].includes(num)) return num;

    let prev = 0; 
    let curr = 1;

    for (let i=2; i<=num; i++) {
        let next = curr + prev
        prev = curr
        curr = next
    }
    return curr;
}

// console.log(fibonacci(10))

/*
prev = 0    curr = 1
i=2    next = 1     prev = 1    curr = 1
i=3    next = 2     prev = 1    curr = 2
i=4    next = 3     prev = 2    curr = 3
i=5    next = 5     prev = 3    curr = 5    

✅ Time and Space Complexity
	•	Time Complexity: O(n)
	•	Space Complexity: O(1) (Only uses a constant amount of space)
*/



// Solution 3: Using recursion
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
[0, 1, 2, 3, 4, 5, 6, 7,  8]

function fibonacci(num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(8))

/*
⏱ Time Complexity: O(2^n)
	•	This version of Fibonacci recalculates the same subproblems many times.
	•	The recursion tree grows exponentially, resulting in O(2^n) time complexity.
    
Space Complexity: O(n)
	•	This is due to the maximum depth of the call stack, which is n in the worst case (when the function keeps calling fibonacci(n - 1) down to 0).
	•	Each recursive call adds a new frame to the call stack, so the maximum depth is n.
*/