console.log("04 Swap 2 numbers");

const num1 = parseInt(prompt("Enter 1st number"));
const num2 = parseInt(prompt("Enter 2nd number"));

// Approach-1: Using 3rd variable
// function swap(num1, num2) {
//     let a = num1;
//     num1 = num2;
//     num2 = a;
//     return {num1, num2};
// } 

// Approach-2: Using only 2 variables
// function swap(num1, num2) {
//     num1 = num1 + num2;
//     num2 = num1 - num2;
//     num1 = num1 - num2;
//     return {num1, num2};
// }

// Approach 3: Object Destructuring
function swap(num1, num2) {
    [num1, num2] = [num2, num1];
    return {num1, num2};
}

const result = swap(num1, num2);
console.log("Result:", result);

// In all approaches: Time Complexity is 1

