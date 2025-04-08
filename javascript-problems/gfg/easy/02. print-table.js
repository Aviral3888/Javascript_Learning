console.log("02 Print Multiplication Table:");

const number = prompt("Enter a number");

// Iterative Approach
// function printTable(number) {
//     for (let i = 1; i<=10; i++) {
//         console.log(`${number} * ${i} = ${number*i}\n`);
//     }
// }

// printTable(number);

// Recursive Approach

function printTableUsingRecursion(num, i = 1) {
    if (i > 10)
        return true;

    // if (i % 2 == 0)
    //     console.log(`${num} * ${i} = ${num*i}`);

    console.log(`${num} * ${i} = ${num * i}`);
    i++;
    printTableUsingRecursion(num, i);
}

printTableUsingRecursion(number);
