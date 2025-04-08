console.log("1. Odd - even check");

const number = prompt("Enter the number you want to check");

console.log("You want to check for: ", number);

function checkEvenOdd(num) {
    let result;
    if (num % 2 == 0)
        result = "even";
    else 
        result = "odd";

    return result;
}

function checkEvenOddUsingBitwiseAnd(num) {
    if ((num & 1) === 1) 
        return "odd";
    else 
        return "even";
}


// let result = checkEvenOdd(number);
let result = checkEvenOddUsingBitwiseAnd(number);
alert(`Your input is: ${result}`);