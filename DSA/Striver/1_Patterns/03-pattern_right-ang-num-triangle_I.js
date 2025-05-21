/*
Problem statement
Example:
Input Format: N = 6

Result:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6

*/

function printPattern(num) {
    for (let row = 1; row <= num; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += `${col} `;
        }
        console.log(line);
    }
}

printPattern(6)