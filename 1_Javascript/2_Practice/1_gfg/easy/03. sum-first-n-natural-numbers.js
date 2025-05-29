console.log("03 Sum of First n natural numbers");

const number = parseInt(prompt("Enter a Number"));

// Using Formula
// function sumOfNNumbers(num) {
//     return (num * (num + 1)) / 2;
// }

// const result = sumOfNNumbers(number);

// Using Loop
function sumOfNNumbersUsingLoop(num) {
    let ans = 0;
    for (let i = 1; i <= num; i++) {
        ans = ans + i;
    }
    return ans;
}

const result = sumOfNNumbersUsingLoop(number);

alert(`Sum of First ${number} numbers is: ${result}`);